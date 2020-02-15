import { getResultsAsVariablesList, flattenTableResults } from './kusto_utils';

describe('Azure Kusto Utils', () => {
  it('getResultsAsVariablesList', () => {
    let output: any = {};
    expect(getResultsAsVariablesList(null).length).toBe(0);
    expect(getResultsAsVariablesList(output).length).toBe(0);
    output = { rows: [['Hello'], ['world']] };
    expect(getResultsAsVariablesList(output).length).toBe(2);
    expect(typeof getResultsAsVariablesList(output)[0]).toBe('object');
    expect(getResultsAsVariablesList(output)[1].value).toBe('world');
    expect(getResultsAsVariablesList(output)[1].text).toBe('world');
    output = {
      rows: [
        ['Hello', 'olleH'],
        ['world', 'dlrow'],
      ],
    };
    expect(getResultsAsVariablesList(output).length).toBe(2);
    expect(typeof getResultsAsVariablesList(output)[0]).toBe('object');
    expect(getResultsAsVariablesList(output)[1].value).toBe('dlrow');
    expect(getResultsAsVariablesList(output)[1].text).toBe('world');
    output = {
      rows: [
        ['Hello', 'Hello1', 'Hello2'],
        ['world', 'world1', 'world2'],
      ],
    };
    expect(getResultsAsVariablesList(output).length).toBe(6);
    expect(typeof getResultsAsVariablesList(output)[0]).toBe('object');
    expect(getResultsAsVariablesList(output)[4].value).toBe('world1');
    expect(getResultsAsVariablesList(output)[4].text).toBe('world1');
  });
  it('flattenTableResults', () => {
    let results: any[] = [];
    expect(flattenTableResults(results)).toStrictEqual({ rows: [] });
    expect(flattenTableResults(results).rows).toStrictEqual([]);
    results = [
      { columns: ['Col1'], rows: ['A', 'B'], refId: 'A' },
      { columns: ['Col2'], rows: ['A', 'C'] },
    ];
    expect(flattenTableResults(results)).toStrictEqual({ columns: ['Col1'], rows: ['A', 'B', 'C'], refId: 'A' });
  });
});
