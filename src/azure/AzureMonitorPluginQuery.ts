export class AzureMonitorPluginQuery {
  refId: string;
  query: string;

  constructor(refId: string, query: string) {
    this.refId = refId;
    this.query = query;
  }
}
