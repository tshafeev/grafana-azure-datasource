import { AzureMonitorPluginQuery } from './../AzureMonitorPluginQuery';
import { AzureConnection } from '../azure_connection/AzureConnection';
import { AzureResource } from './../azure_resource/AzureResource';
import { KustoResponseParser } from '../utils/KustoResponseParser';
import { doBackendRequest } from './../../app/utils';
export { LogAnalyticsQueryEditor } from './LogAnalyticsQueryEditor';

export interface LAQueryStructure {
  workspace: string;
  query: string;
}

export const DEFAULT_LA_QUERY: LAQueryStructure = {
  workspace: '',
  query: '',
};

export class AzureLogAnalyticsQuery extends AzureMonitorPluginQuery {
  resourceId: string;
  resource: AzureResource;
  workspace: string;
  query: string;
  constructor(refId = '', resourceId = '', workspace = '', query = '') {
    super(refId, query);
    this.resourceId = resourceId;
    this.resource = new AzureResource(resourceId);
    this.workspace = workspace;
    this.query = query;
  }
}

export class AzureLogAnalyticsDataSource {
  private url: string;
  private baseUrl: string;

  /** @ngInject */
  constructor(private azureConnection: AzureConnection, private templateSrv: any) {
    this.url = this.azureConnection.instanceSettings.url;
    this.baseUrl = `/` + this.azureConnection.instanceSettings.jsonData.cloudName;
  }

  private async doLogAnalyticsRequest(query: AzureLogAnalyticsQuery, maxRetries = 1) {
    const requestObject: any = {
      data: {
        query: query.query,
      },
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      url: this.url + this.baseUrl + query.resourceId + '/query?api-version=2017-10-01',
    };
    if (query.workspace) {
      requestObject.url = this.url + '/loganalytics/v1/workspaces/' + query.workspace + '/query?api-version=2017-10-01';
    }
    return doBackendRequest(requestObject, maxRetries);
  }

  private doQueries(queries: AzureLogAnalyticsQuery[]) {
    return queries.map(query => {
      return this.doLogAnalyticsRequest(query)
        .then((result: any) => {
          return { result, query };
        })
        .catch((error: any) => {
          throw { error, query };
        });
    });
  }

  async query(options: any) {
    const queries: AzureLogAnalyticsQuery[] = options.targets
      .filter((item: any) => {
        const la: AzureLogAnalyticsQuery = item.azureLogAnalytics;
        return item.hide !== true && la && la.query && (la.resourceId || la.workspace);
      })
      .map((target: any) => {
        const item: AzureLogAnalyticsQuery = target.azureLogAnalytics;
        const queryOption = new AzureLogAnalyticsQuery(
          target.refId,
          this.templateSrv.replace(item.resourceId, options.scopedVars),
          this.templateSrv.replace(item.workspace, options.scopedVars),
          this.templateSrv.replace(item.query, options.scopedVars)
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

  metricFindQuery(query: string) {
    return undefined;
  }
}
