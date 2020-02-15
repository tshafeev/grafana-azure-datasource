import { flatten, filter, cloneDeep } from 'lodash';
import { DataSourceApi } from '@grafana/data';
import { AzureConnection } from './azure/azure_connection/AzureConnection';
import { AzureResourceGraphDataSource } from './azure/resource_graph/ResourceGraph';
import * as CONFIG from './config';

export class Datasource extends DataSourceApi {
  private azureResourceGraphDatasource: AzureResourceGraphDataSource;
  /** @ngInject */
  constructor(private instanceSettings: any, private templateSrv: any) {
    super(instanceSettings);
    const azureConnection = new AzureConnection(this.instanceSettings);
    this.azureResourceGraphDatasource = new AzureResourceGraphDataSource(azureConnection, this.templateSrv);
  }

  query(options: any) {
    const promises: any[] = [];

    const azureResourceGraphOptions = cloneDeep(options);
    azureResourceGraphOptions.targets = filter(azureResourceGraphOptions.targets, ['queryType', CONFIG.AzureResourceGraph]);
    if (azureResourceGraphOptions.targets.length > 0) {
      const argPromise = this.azureResourceGraphDatasource.query(azureResourceGraphOptions);
      if (argPromise) {
        promises.push(argPromise);
      }
    }

    return Promise.all(promises).then(results => {
      return { data: flatten(results) };
    });
  }

  testDatasource() {
    return new Promise(async (resolve: any, reject: any) => {
      try {
        const azureConnection = new AzureConnection(this.instanceSettings);
        const result = await azureConnection.getSubscriptions();
        if (result && result.length > 0) {
          resolve({ message: 'Successfully Connected Azure Monitor', status: 'success' });
        } else {
          reject({ message: 'Failed to retrieve subscriptions', status: 'error' });
        }
      } catch (error) {
        reject({ message: 'Failed to Connect', status: 'error' });
      }
    });
  }

  metricFindQuery(query: string) {
    if (!query) {
      return Promise.resolve([]);
    }
    const argResult = this.azureResourceGraphDatasource.metricFindQuery(query);
    if (argResult) {
      return argResult;
    }
    return Promise.resolve([]);
  }
}
