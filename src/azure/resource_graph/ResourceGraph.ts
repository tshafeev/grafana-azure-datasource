import { AzureMonitorPluginQuery } from './../AzureMonitorPluginQuery';
import { AzureConnection } from '../azure_connection/AzureConnection';
import { AzureSubscription } from '../azure_subscription/AzureSubscription';
import { KustoResponseParser } from '../utils/KustoResponseParser';
import { getResultsAsVariablesList, flattenTableResults } from '../utils/kusto_utils';
import { doBackendRequest } from './../../app/utils';

export class AzureResourceGraphQuery extends AzureMonitorPluginQuery {
  top: number;
  skip: number;
  subscriptions: string[];
  constructor(refId = '', query = '', top = 1000, skip = 0, subscriptions: string[] = []) {
    super(refId, query);
    this.top = top;
    this.skip = skip;
    this.subscriptions = subscriptions;
  }
}

export class AzureResourceGraphDataSource {
  private url: string;
  private baseUrl: string;
  private allSubscriptions: AzureSubscription[] = [];

  /** @ngInject */
  constructor(private azureConnection: AzureConnection, private templateSrv: any) {
    this.url = azureConnection.instanceSettings.url;
    this.baseUrl = `/` + azureConnection.instanceSettings.jsonData.cloudName;
  }
  private async doResourceGraphRequest(query: AzureResourceGraphQuery, maxRetries = 1) {
    let subscriptions: string[] = [];
    if (this.allSubscriptions.length === 0) {
      this.allSubscriptions = await this.azureConnection.getSubscriptions();
    }
    subscriptions = this.allSubscriptions.map((sub: AzureSubscription) => sub.subscriptionId.toString());
    if (query.subscriptions.indexOf('all') < 0) {
      const filteredSubscriptions: string[] = query.subscriptions.filter(s => s !== 'all');
      if (filteredSubscriptions.length > 0) {
        subscriptions = filteredSubscriptions;
      }
    }
    const requestObject: any = {
      data: {
        options: {
          $skip: query.skip || 0,
          $top: query.top || 100,
          resultFormat: 'table',
        },
        query: query.query,
        subscriptions,
      },
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      url: this.url + this.baseUrl + '/providers/Microsoft.ResourceGraph/resources?api-version=2019-04-01',
    };
    return doBackendRequest(requestObject, maxRetries);
  }
  private doQueries(queries: AzureResourceGraphQuery[]) {
    return queries.map(query => {
      return this.doResourceGraphRequest(query)
        .then((result: any) => {
          return { result, query };
        })
        .catch((error: any) => {
          throw { error, query };
        });
    });
  }
  async query(options: any) {
    const queries: AzureResourceGraphQuery[] = options.targets
      .filter((item: any) => {
        return item.hide !== true && item.azureResourceGraph && item.azureResourceGraph.query;
      })
      .map((target: any) => {
        const item: AzureResourceGraphQuery = target.azureResourceGraph;
        const queryOption = new AzureResourceGraphQuery(
          target.refId,
          this.templateSrv.replace(item.query, options.scopedVars),
          item.top || 1000,
          item.skip || 0,
          item.subscriptions || ['all']
        );
        return queryOption;
      });
    if (!queries || queries.length === 0) {
      return;
    }
    const promises = this.doQueries(queries);
    return Promise.all(promises).then((results: any) => {
      const responseParser = new KustoResponseParser(results);
      return responseParser.output;
    });
  }
  simpleQuery(query: string, refId = 'SimpleQuery', top = 1000, skip = 0, subscriptions: string[] = ['all']) {
    if (query) {
      const queries: AzureResourceGraphQuery[] = [new AzureResourceGraphQuery(refId, query, top, skip, subscriptions)];
      const promises = this.doQueries(queries);
      return Promise.all(promises).then((results: any) => {
        const responseParser = new KustoResponseParser(results);
        return responseParser.output;
      });
    }
    return undefined;
  }
  async batchQuery(query: string, maxLoop: number, results: any[] = [], skip = 0) {
    const res = await this.simpleQuery(query, '', 1000, skip);
    results.push(res);
    if (maxLoop > 0 && res && res.rows && res.rows.length >= 1000) {
      await this.batchQuery(query, maxLoop - 1, results, skip + 1000);
    }
    return flattenTableResults(results);
  }
  metricFindQuery(query: string, refId = `MetricFindQuery`) {
    if (query.startsWith(`ResourceGraph(`) && query.endsWith(`)`)) {
      const resourceGraphQuery = query.replace(`ResourceGraph(`, ``).slice(0, -1);
      const queryOption = new AzureResourceGraphQuery(refId, this.templateSrv.replace(resourceGraphQuery), 1000, 0, ['all']);
      const promises = this.doQueries([queryOption]);
      return Promise.all(promises).then((results: any) => {
        const responseParser = new KustoResponseParser(results);
        return getResultsAsVariablesList(responseParser.output);
      });
    }
    return undefined;
  }
}
