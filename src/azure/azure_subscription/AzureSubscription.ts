export class AzureSubscription {
  id = '';
  subscriptionId = '';
  tenantId = '';
  displayName = '';
  name = '';

  constructor(result: any) {
    if (result) {
      this.id = result.id || result.subscriptionId;
      this.subscriptionId = result.subscriptionId || result.id;
      this.tenantId = result.tenantId;
      this.displayName = result.displayName;
      this.name = result.name || result.displayName || '';
    }
  }
}
