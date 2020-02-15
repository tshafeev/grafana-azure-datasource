import { every, sortBy, uniq, flatten } from 'lodash';

export const isTimeSeriesResults = (results: any[]): boolean => {
  const formats: string[] = [];
  results.forEach(res => {
    if (res.result && res.result.data && res.result.data.tables) {
      const tmpOutput = res.result.data.tables || [];
      tmpOutput.forEach((table: any) => {
        if (
          table.columns &&
          table.columns.length === 3 &&
          table.columns.find((c: any) => c.type === 'datetime') &&
          table.columns.find((c: any) => c.type === 'string') &&
          table.columns.find((c: any) => c.type === 'long')
        ) {
          formats.push('time_series');
        } else if (
          table.columns &&
          table.columns.length === 2 &&
          table.columns.find((c: any) => c.type === 'datetime') &&
          table.columns.find((c: any) => c.type === 'long')
        ) {
          formats.push('time_series');
        } else {
          formats.push('table');
        }
      });
    } else if (res.result && res.result.data && res.result.data.data) {
      formats.push('table');
    }
  });
  return every(formats, (f: string) => f === 'time_series');
};
export const isTimeSeriesWithoutSeriesName = (table: any): boolean => {
  if (
    table.columns &&
    table.columns.length >= 3 &&
    table.columns.find((c: any) => c.type === 'datetime') &&
    table.columns.find((c: any) => c.type === 'string') &&
    table.columns.find((c: any) => c.type === 'long')
  ) {
    return false;
  } else if (
    table.columns &&
    table.columns.length >= 2 &&
    table.columns.find((c: any) => c.type === 'datetime') &&
    table.columns.find((c: any) => c.type === 'long')
  ) {
    return true;
  } else {
    return true;
  }
};
export const decideFieldNamesAndPosition = (table: any): any => {
  const fields: any = {};
  table.columns.forEach((column: any, position: number) => {
    if (column.type === 'datetime') {
      fields.timestamp = {};
      fields.timestamp.name = column.name;
      fields.timestamp.index = position;
    } else if (column.type === 'string') {
      fields.metricname = {};
      fields.metricname.name = column.name;
      fields.metricname.index = position;
    } else if (column.type === 'long') {
      fields.value = {};
      fields.value.name = column.name;
      fields.value.index = position;
    }
  });
  if (isTimeSeriesWithoutSeriesName(table)) {
    fields.metricname = {};
    fields.metricname.name = fields.value.name || 'metric';
    fields.metricname.index = -1;
  }
  return fields;
};
export const sortTimeSeriesResults = (output: any): any => {
  return output.map((o: any) => {
    o.datapoints = sortBy(o.datapoints, [
      o => {
        return o[1];
      },
    ]);
    return o;
  });
};
export const parseTimeSeriesResults = (result: any[]): any[] => {
  const data: any[] = [];
  result.forEach(res => {
    if (res.result && res.result.data && res.result.data.tables) {
      const tmpOutput = res.result.data.tables || [];
      tmpOutput.forEach((table: any) => {
        const fields = decideFieldNamesAndPosition(table);
        if (fields.metricname.index === -1) {
          const series: any = {};
          series.target = fields.value.name;
          series.datapoints = [];
          table.rows.forEach((row: any) => {
            series.datapoints.push([row[fields.value.index], new Date(row[fields.timestamp.index]).getTime()]);
          });
          data.push(series);
        } else {
          const uniquenames: string[] = uniq(table.rows.map((row: any) => row[fields.metricname.index]));
          uniquenames.forEach((uniquename: string) => {
            const series: any = {};
            series.target = uniquename;
            series.datapoints = [];
            table.rows.forEach((row: any) => {
              if (row[fields.metricname.index] === uniquename) {
                series.datapoints.push([row[fields.value.index], new Date(row[fields.timestamp.index]).getTime()]);
              }
            });
            data.push(series);
          });
        }
      });
    }
  });
  return data;
};
export const parseTableResult = (columns: any[], rows: any[]): any => {
  columns = (columns || []).map((column: any, index: number) => {
    column.text = column.name || index;
    column.type = column.type === 'integer' ? 'number' : column.type || 'string';
    return column;
  });
  rows = (rows || []).map((row: any) => {
    return row.map((rowItem: any, index: number) => {
      if (columns[index] && columns[index].type === 'number') {
        return +rowItem;
      } else if (typeof rowItem === 'string') {
        return rowItem;
      } else {
        return JSON.stringify(rowItem);
      }
    });
  });
  const output: any = {
    columns,
    rows,
    type: 'table',
  };
  return output;
};
export const getResultsAsVariablesList = (output: any) => {
  const returnvalues: Array<{ text: string; value: string }> = [];
  if (output && output.rows) {
    output.rows.forEach((row: string[]) => {
      if (row.length === 2) {
        const text = row[0];
        const value = row[1];
        returnvalues.push({ text, value });
      } else {
        row.forEach((col: string) => {
          const text = col;
          const value = col;
          returnvalues.push({ text, value });
        });
      }
    });
  }
  return returnvalues;
};
export const flattenTableResults = (results: any[]) => {
  const resultsFlattened = results[0] || {};
  resultsFlattened.rows = uniq(flatten(results.map((r: any) => r.rows)));
  return resultsFlattened;
};
