import { AzureSubscription } from './../azure_subscription/AzureSubscription';
import { doBackendRequest } from './../../app/utils';

export class AzureConnection {
  private baseUrl: string;
  private cloudName: string;
  private subscriptions: AzureSubscription[] = [];

  /** @ngInject */
  constructor(public instanceSettings: any) {
    this.baseUrl = instanceSettings.url;
    this.cloudName = instanceSettings.jsonData.cloudName || 'azuremonitor';
  }

  async getSubscriptions(): Promise<AzureSubscription[]> {
    if (this.subscriptions.length > 0) {
      return new Promise(resolve => {
        resolve(this.subscriptions);
      });
    } else {
      const requestObject: any = {
        method: 'GET',
        url: this.baseUrl + `/${this.cloudName}/subscriptions?api-version=2018-01-01`,
      };
      return doBackendRequest(requestObject, 2)
        .then((response: any) => {
          if (response && response.status === 200 && response.data && response.data.value) {
            this.subscriptions = (response.data.value || []).map((result: any) => {
              return new AzureSubscription(result);
            });
            return this.subscriptions;
          }
          console.error('Invalid response received for getSubscriptions query', response);
          return this.subscriptions;
        })
        .catch((ex: any) => {
          console.error(ex);
          return this.subscriptions;
        });
    }
  }
}
