export class AzureResource {
  id = '';
  subscriptionId = '';
  resourceGroup = '';
  type = '';
  name = '';
  constructor(id = '', subscriptionId = '', resourceGroup = '', type = '', name = '') {
    if (id) {
      const idsplit: string[] = id.split('/');
      this.id = id;
      this.subscriptionId = idsplit[2];
      this.resourceGroup = idsplit[4];
      this.type = idsplit
        .filter((iditem: string, index: number) => {
          return iditem && index >= 6 && index !== idsplit.length - 1;
        })
        .join('/');
      this.name = idsplit[idsplit.length - 1];
    } else if (resourceGroup && type && name) {
      this.id = `/subscriptions/${subscriptionId}/resourceGroups/${resourceGroup}/providers/${type}/${name}`;
    }
  }
}
