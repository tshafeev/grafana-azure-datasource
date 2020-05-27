import { flatten, filter, cloneDeep } from 'lodash';
import { DataSourceApi } from '@grafana/data';
import { AzureConnection } from './azure/azure_connection/AzureConnection';
import { AzureResourceGraphDataSource } from './azure/resource_graph/ResourceGraph';
import { AzureApplicationInsightsDataSource } from './azure/application_insights/ApplicationInsights';
import { AzureLogAnalyticsDataSource } from './azure/log_analytics/LogAnalytics';
import { AzureCostAnalysisDataSource } from './azure/azure_costanalysis/AzureCostAnalysis';
import { AzureServiceHealthDataSource } from './azure/azure_service_health/ServiceHealth';
import * as CONFIG from './config';

export class Datasource extends DataSourceApi {
  private azureResourceGraphDatasource: AzureResourceGraphDataSource;
  private azureApplicationInsightsDatasource: AzureApplicationInsightsDataSource;
  private azureLogAnalyticsDatasource: AzureLogAnalyticsDataSource;
  private azureConstAnalysisDatasource: AzureCostAnalysisDataSource;
  private azureServiceHealthDatasource: AzureServiceHealthDataSource;
  /** @ngInject */
  constructor(private instanceSettings: any, private templateSrv: any) {
    super(instanceSettings);
    const azureConnection = new AzureConnection(this.instanceSettings);
    this.azureResourceGraphDatasource = new AzureResourceGraphDataSource(azureConnection, this.templateSrv);
    this.azureApplicationInsightsDatasource = new AzureApplicationInsightsDataSource(azureConnection, this.templateSrv);
    this.azureLogAnalyticsDatasource = new AzureLogAnalyticsDataSource(azureConnection, this.templateSrv);
    this.azureConstAnalysisDatasource = new AzureCostAnalysisDataSource(azureConnection, this.templateSrv);
    this.azureServiceHealthDatasource = new AzureServiceHealthDataSource(azureConnection, this.templateSrv);
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

    const azureServiceHealthOptions = cloneDeep(options);
    azureServiceHealthOptions.targets = filter(azureServiceHealthOptions.targets, ['queryType', CONFIG.AzureServiceHealth]);
    if (azureServiceHealthOptions.targets.length > 0) {
      const argPromise = this.azureServiceHealthDatasource.query(azureServiceHealthOptions);
      if (argPromise) {
        promises.push(argPromise);
      }
    }

    const azureAppInsightsOptions = cloneDeep(options);
    azureAppInsightsOptions.targets = filter(azureAppInsightsOptions.targets, ['queryType', CONFIG.AzureApplicationInsights]);
    if (azureAppInsightsOptions.targets.length > 0) {
      const argPromise = this.azureApplicationInsightsDatasource.query(azureAppInsightsOptions);
      if (argPromise) {
        promises.push(argPromise);
      }
    }

    const azureLogAnalyticsOptions = cloneDeep(options);
    azureLogAnalyticsOptions.targets = filter(azureLogAnalyticsOptions.targets, ['queryType', CONFIG.AzureLogAnalytics]);
    if (azureLogAnalyticsOptions.targets.length > 0) {
      const argPromise = this.azureLogAnalyticsDatasource.query(azureLogAnalyticsOptions);
      if (argPromise) {
        promises.push(argPromise);
      }
    }

    const azureCostAnalysisOptions = cloneDeep(options);
    azureCostAnalysisOptions.targets = filter(azureCostAnalysisOptions.targets, ['queryType', CONFIG.AzureCostAnalysis]);
    if (azureCostAnalysisOptions.targets.length > 0) {
      const acmPromise = this.azureConstAnalysisDatasource.query(azureCostAnalysisOptions);
      if (acmPromise) {
        promises.push(acmPromise);
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
