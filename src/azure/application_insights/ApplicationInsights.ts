import { AzureMonitorPluginQuery } from './../AzureMonitorPluginQuery';
import { AzureConnection } from '../azure_connection/AzureConnection';
import { AzureResource } from './../azure_resource/AzureResource';
import { KustoResponseParser } from '../utils/KustoResponseParser';
import { doBackendRequest } from './../../app/utils';

export class AzureApplicationInsightsQuery extends AzureMonitorPluginQuery {
  resourceId: string;
  resource: AzureResource;
  appInsightsAppId: string;
  query: string;
  constructor(refId = '', resourceId = '', appInsightsAppId = '', query = '') {
    super(refId, query);
    this.resourceId = resourceId;
    this.resource = new AzureResource(resourceId);
    this.appInsightsAppId = appInsightsAppId;
    this.query = query;
  }
}

export class AzureApplicationInsightsDataSource {
  private url: string;
  private baseUrl: string;

  /** @ngInject */
  constructor(private azureConnection: AzureConnection, private templateSrv: any) {
    this.url = this.azureConnection.instanceSettings.url;
    this.baseUrl = `/` + this.azureConnection.instanceSettings.jsonData.cloudName;
  }

  private async doApplicationInsightsRequest(query: AzureApplicationInsightsQuery, maxRetries = 1) {
    const requestObject: any = {
      data: {
        query: query.query,
      },
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      url: this.url + this.baseUrl + query.resourceId + '/query?api-version=2018-04-20',
    };
    if (query.appInsightsAppId) {
      requestObject.url = this.url + '/applicationinsights/v1/apps/' + query.appInsightsAppId + '/query?api-version=2018-04-20';
    }
    return doBackendRequest(requestObject, maxRetries);
  }

  private doQueries(queries: AzureApplicationInsightsQuery[]) {
    return queries.map(query => {
      return this.doApplicationInsightsRequest(query)
        .then((result: any) => {
          return { result, query };
        })
        .catch((error: any) => {
          throw { error, query };
        });
    });
  }

  async query(options: any) {
    const queries: AzureApplicationInsightsQuery[] = options.targets
      .filter((item: any) => {
        const ai: AzureApplicationInsightsQuery = item.azureAppInsights;
        return item.hide !== true && ai && ai.query && (ai.resourceId || ai.appInsightsAppId);
      })
      .map((target: any) => {
        const item: AzureApplicationInsightsQuery = target.azureAppInsights;
        const queryOption = new AzureApplicationInsightsQuery(
          target.refId,
          this.templateSrv.replace(item.resourceId, options.scopedVars),
          this.templateSrv.replace(item.appInsightsAppId, options.scopedVars),
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
