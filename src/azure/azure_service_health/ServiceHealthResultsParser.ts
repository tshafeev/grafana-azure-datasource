import { forEach } from 'lodash';
export class ServiceHealthResponseParser {
  output: any = {
    columns: [],
    refId: '',
    rows: [],
    type: 'table',
  };
  constructor(response: any[]) {
    response.forEach(res => {
      if (res && res.result && res.result.data && res.result.data.value) {
        res.result.data.value.forEach((rowitem: any, index: number) => {
          console.log(rowitem);
          if (index === 0) {
            const columns: any = [];
            forEach(rowitem, (v, k) => {
              if (k !== 'properties') {
                const thistype: string = typeof k;
                columns.push({
                  text: k,
                  type: k.toLowerCase().indexOf('timestamp') > -1 ? 'datetime' : thistype,
                });
              }
            });
            columns.push({
              text: 'title',
              type: 'string',
            });
            this.output.columns = columns;
          }
          const row: any[] = [];
          forEach(rowitem, (v, k, i) => {
            let value: any = '';
            if (typeof v === 'string' && k.toLowerCase().indexOf('timestamp') > -1) {
              value = new Date(v).toISOString();
            } else if (typeof v === 'string') {
              value = v || '-';
            } else if (typeof v === 'object' && (v.value || v.localizedValue || v.value === '')) {
              value = v.localizedValue || '-';
            } else {
              try {
                value = JSON.stringify(v) || '-';
              } catch (ex) {
                value = v;
              }
            }
            if (k === 'properties') {
            } else {
              row.push(value);
            }
          });
          forEach(rowitem, (v, k, i) => {
            if (k === 'properties') {
              row.push(v.title);
            }
          });
          this.output.rows.push(row);
        });
      }
    });
    console.log(this.output);
  }
}
