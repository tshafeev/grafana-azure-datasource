import { AzureMonitorPluginQuery } from './../AzureMonitorPluginQuery';
import { AzureConnection } from '../azure_connection/AzureConnection';
import { doBackendRequest } from './../../app/utils';
import { ServiceHealthResponseParser } from './ServiceHealthResultsParser';
export { AzureServiceHealthQueryEditor } from './ServiceHealthEditor';

export interface ServiceHealthQueryStructure {
  subscriptionId: string;
}

export const DEFAULT_SERVICE_HEALTH_QUERY: ServiceHealthQueryStructure = {
  subscriptionId: '',
};

export class AzureServiceHealthQuery extends AzureMonitorPluginQuery {
  subscriptionId: string;
  filter: string;
  constructor(refId = '', subscriptionId = '', from: Date, to: Date) {
    super(refId, '');
    this.subscriptionId = subscriptionId;
    const startTime: any = from.toISOString();
    const endTime: any = to.toISOString();
    this.filter = `eventTimestamp ge '${startTime}' and eventTimestamp le '${endTime}' and categories eq 'ServiceHealth'`;
  }
}

export class AzureServiceHealthDataSource {
  private url: string;
  private baseUrl: string;

  /** @ngInject */
  constructor(private azureConnection: AzureConnection, private templateSrv: any) {
    this.url = this.azureConnection.instanceSettings.url;
    this.baseUrl = `/` + this.azureConnection.instanceSettings.jsonData.cloudName;
  }

  private async doServiceHealthRequest(query: AzureServiceHealthQuery, maxRetries = 1) {
    const requestObject: any = {
      headers: { 'Content-Type': 'application/json' },
      method: 'GET',
      url:
        this.url +
        this.baseUrl +
        `/subscriptions/${query.subscriptionId}/providers/microsoft.insights/eventtypes/management/values?api-version=2017-03-01-preview&$filter=${query.filter}`,
    };
    return doBackendRequest(requestObject, maxRetries);
  }

  private doQueries(queries: AzureServiceHealthQuery[]) {
    return queries.map(query => {
      return this.doServiceHealthRequest(query)
        .then((result: any) => {
          return { result, query };
        })
        .catch((error: any) => {
          throw { error, query };
        });
    });
  }

  async query(options: any) {
    const queries: AzureServiceHealthQuery[] = options.targets
      .filter((item: any) => {
        const sh: AzureServiceHealthQuery = item.azureServiceHealth;
        return item.hide !== true && sh && sh.subscriptionId;
      })
      .map((target: any) => {
        const item: AzureServiceHealthQuery = target.azureServiceHealth;
        const queryOption = new AzureServiceHealthQuery(
          target.refId,
          this.templateSrv.replace(item.subscriptionId, options.scopedVars),
          options.range.from,
          options.range.to
        );
        return queryOption;
      });
    if (!queries || queries.length === 0) {
      return;
    }
    const promises = this.doQueries(queries);
    return Promise.all(promises).then((results: any) => {
      const responseParser = new ServiceHealthResponseParser(results);
      return responseParser.output;
    });
  }

  metricFindQuery(query: string) {
    return undefined;
  }
}
