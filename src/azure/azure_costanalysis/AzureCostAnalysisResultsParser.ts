import { uniq } from 'lodash';
import { AzureCostAnalysisQuery } from './AzureCostAnalysis';

export class AzureCostAnalysisResultItem {
  timestamp: Date;
  label: string;
  cost: number;
  constructor(row: any[], columns: any[], query: AzureCostAnalysisQuery) {
    let keyindex = 2;
    let label = '';
    this.timestamp = new Date();
    this.cost = row[0];
    if (query.granularity === 'None') {
      this.timestamp = new Date(query.query.range.from);
      keyindex--;
    } else if (query.granularity === 'Daily') {
      const dateString = row[2].toString();
      const year = dateString.substring(0, 4);
      const month = dateString.substring(4, 6);
      const day = dateString.substring(6, 8);
      this.timestamp = new Date(year, month - 1, day);
    } else if (query.granularity === 'Monthly') {
      this.timestamp = new Date(row[2]);
    }
    if (query.data.dataSet.grouping) {
      if (query.data.dataSet.grouping[0] && query.data.dataSet.grouping[0].type === 'TagKey') {
        label = row
          .filter((r, i) => i < row.length - 1 && i > keyindex + 1)
          .map(item => item || '-')
          .join(':')
          .trim();
      } else {
        label = row
          .filter((r, i) => i < row.length - 1 && i > keyindex)
          .map(item => item || '-')
          .join(':')
          .trim();
      }
    } else {
      label = `cost`;
    }
    this.label = label;
    if (
      query.rawquery.alias &&
      query.rawquery.alias !== `{{default}}` &&
      (query.rawquery.alias.indexOf('{{default}}') > -1 || this.label === 'cost')
    ) {
      this.label = query.rawquery.alias;
      this.label = this.label.replace(/{{default}}/g, label);
      this.label = this.label.replace(/{{metric}}/g, label);
      this.label = this.label.replace(/{{subscription}}/g, query.rawquery.subscriptionName || query.rawquery.subscriptionId);
      this.label = this.label.replace(/{{subscriptionname}}/g, query.rawquery.subscriptionName || query.rawquery.subscriptionId);
      this.label = this.label.replace(/{{subscriptionid}}/g, query.rawquery.subscriptionId);
    }
  }
}

export class AzureCostAnalysisResultsParser {
  output: any[] = [];
  constructor(response: any[]) {
    const costitems: AzureCostAnalysisResultItem[] = [];
    response.forEach(res => {
      if (res && res.result && res.result.data && res.result.data.properties && res.result.data.properties.rows) {
        res.result.data.properties.rows.forEach((row: any) => {
          costitems.push(new AzureCostAnalysisResultItem(row, res.result.data.properties.columns, res.query));
        });
      }
    });
    const uniqkeys: string[] = uniq(costitems.map(c => c.label));
    uniqkeys.forEach(key => {
      const o: any = { target: key || '-', datapoints: [] };
      o.datapoints = costitems
        .filter(c => c.label === key)
        .map(c => [c.cost, c.timestamp])
        .sort((a: any, b: any) => a[1] - b[1]);
      this.output.push(o);
    });
    this.output = this.output.sort((a, b) => b.target - a.target);
  }
}
