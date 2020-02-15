import { isTimeSeriesResults, parseTimeSeriesResults, sortTimeSeriesResults, parseTableResult } from './kusto_utils';

export class KustoResponseParser {
  output: any = {
    columns: [],
    refId: '',
    rows: [],
    type: 'table',
  };
  constructor(response: any[]) {
    if (isTimeSeriesResults(response)) {
      this.output.type = 'time_series';
      this.output = parseTimeSeriesResults(response);
      this.output = sortTimeSeriesResults(this.output);
    } else {
      this.output.type = 'table';
      response.forEach(res => {
        if (res.result && res.result.data && res.result.data.tables) {
          const tmpOutput = res.result.data.tables || [];
          tmpOutput.forEach((table: any) => {
            const output = parseTableResult(table.columns, table.rows);
            this.output.columns = output.columns;
            this.output.rows = [].concat(this.output.rows, output.rows);
            this.output.refId = res.query.refId;
          });
        } else if (res.result && res.result.data && res.result.data.data) {
          const tmpOutput = res.result.data.data || {};
          const output = parseTableResult(tmpOutput.columns, tmpOutput.rows);
          this.output.columns = output.columns;
          this.output.rows = [].concat(this.output.rows, output.rows);
          this.output.refId = res.query.refId;
        }
      });
    }
  }
}
