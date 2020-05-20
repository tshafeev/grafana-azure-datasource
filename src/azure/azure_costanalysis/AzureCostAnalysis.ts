import { AzureMonitorPluginQuery } from '../AzureMonitorPluginQuery';
import { AzureConnection } from '../azure_connection/AzureConnection';
import { AzureCostAnalysisResultsParser } from './AzureCostAnalysisResultsParser';
import { doBackendRequest } from '../../app/utils';

interface AzureCostAnalysisGrouping {
  type: string;
  name: string;
}

interface AzureCostAnalysisFilter {
  FilterType: string;
  Name: string;
  Operator: string;
  Values: string[];
}

export interface AzureCostAnalysisQueryStructure {
  subscriptionId: string;
  granularity: string;
  grouping: AzureCostAnalysisGrouping[];
  filters: AzureCostAnalysisFilter[];
}

export const DEFAULT_COST_ANALYSIS_QUERY: AzureCostAnalysisQueryStructure = {
  subscriptionId: "",
  granularity: "Daily",
  grouping: [{ type: "None", name: "None" }],
  filters: [{ FilterType: "None", Name: "None", Operator: "In", Values: [] }]
}

export class AzureCostQueryDataParam {
  type: string;
  timeframe: string;
  timePeriod: { from: string, to: string };
  dataSet: any
  constructor(range: any, dataSet: any) {
    this.type = "ActualCost"
    this.timeframe = "Custom";
    this.timePeriod = {
      from: new Date(range.from).toISOString(),
      to: new Date(range.to).toISOString()
    }
    this.dataSet = dataSet;
  }
}

export class AzureCostAnalysisQuery extends AzureMonitorPluginQuery {
  granularity: string;
  query: any;
  data: AzureCostQueryDataParam;
  scope: string;
  constructor(refId = '', options: any, item: any, templateSrv: any) {
    super(refId, options);
    this.scope = templateSrv.replace(`/subscriptions/${item.subscriptionId}`, options.scopedVars);
    this.granularity = templateSrv.replace(item.granularity || 'Monthly', options.scopedVars);
    let grouping = [];
    grouping = (item.grouping && item.grouping.length > 0 ? item.grouping : [{ "type": "Dimension", "name": "ServiceName" }]);
    this.data = new AzureCostQueryDataParam(options.range, {
      "granularity": this.granularity,
      "aggregation": {
        "totalCost": { "name": "PreTaxCost", "function": "Sum" },
        "totalCostUSD": { "name": "PreTaxCostUSD", "function": "Sum" }
      },
      "sorting": [{ "direction": "ascending", "name": "UsageDate" }],
      "grouping": grouping
    });
    if (grouping && grouping.length > 0 && grouping[0].type === "None") {
      delete this.data.dataSet.grouping;
    }
    if (item.filters && item.filters.length > 0 && item.filters[0].FilterType !== 'None') {
      if (item.filters.length === 1) {
        let filteritem: any = {};
        filteritem[item.filters[0].FilterType] = item.filters[0];
        delete filteritem[item.filters[0].FilterType].FilterType;
        this.data.dataSet.filter = filteritem;
      } else if (item.filters.length > 0) {
        let filter: any = { And: [] };
        item.filters.forEach((filterItem: any) => {
          let filteritem: any = {};
          filteritem[filterItem.FilterType] = filterItem;
          delete filteritem[filterItem.FilterType].FilterType;
          filter.And.push(filteritem);
        });
        this.data.dataSet.filter = filter;
      }
    } else if (item.filter) {
      this.data.dataSet.filter = item.filter;
    }
  }
}

export class AzureCostAnalysisDataSource {
  private url: string;
  private baseUrl: string;

  /** @ngInject */
  constructor(private azureConnection: AzureConnection, private templateSrv: any) {
    this.url = this.azureConnection.instanceSettings.url;
    this.baseUrl = `/` + this.azureConnection.instanceSettings.jsonData.cloudName;
  }

  private async doCostRequest(query: AzureCostAnalysisQuery, maxRetries = 1) {
    const requestObject: any = {
      data: query.data,
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      url: this.url + this.baseUrl + query.scope + `/providers/Microsoft.CostManagement/query?api-version=2019-11-01&$top=10000`,
    };
    return doBackendRequest(requestObject, maxRetries);
  }

  private doQueries(queries: AzureCostAnalysisQuery[]) {
    return queries.map(query => {
      return this.doCostRequest(query)
        .then((result: any) => {
          return { result, query };
        })
        .catch((error: any) => {
          throw { error, query };
        });
    });
  }

  async query(options: any) {
    const queries: AzureCostAnalysisQuery[] = options.targets
      .filter((item: any) => {
        const aca: AzureCostAnalysisQuery = item.azureCostAnalysis;
        return item.hide !== true && aca;
      })
      .map((target: any) => {
        const item: AzureCostAnalysisQuery = target.azureCostAnalysis;
        const queryOption = new AzureCostAnalysisQuery(
          target.refId,
          options,
          item,
          this.templateSrv
        );
        return queryOption;
      });
    if (!queries || queries.length === 0) {
      return;
    }
    const promises = this.doQueries(queries);
    return Promise.all(promises).then((results: any) => {
      const responseParser = new AzureCostAnalysisResultsParser(results);
      return responseParser.output;
    });
  }

  metricFindQuery(query: string) {
    return undefined;
  }
}

export { AzureCostAnalysisQueryEditor } from "./AzureCostAnalysisQueryEditor";