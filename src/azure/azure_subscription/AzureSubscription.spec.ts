import { AzureSubscription } from './AzureSubscription';

const mySubscription = new AzureSubscription({
  id: '/subscriptions/1111-1111-1111-111',
  subscriptionId: '1111-1111-1111-111',
  tenantId: 'aaaa-aaaa-aaaa-aaaa',
  displayName: 'My Subscription Name',
});

const dummySubscription = new AzureSubscription(null);

describe('Azure Subscription', () => {
  it('Normal Scenario', () => {
    expect(mySubscription.id).toBe('/subscriptions/1111-1111-1111-111');
    expect(mySubscription.subscriptionId).toBe('1111-1111-1111-111');
    expect(mySubscription.tenantId).toBe('aaaa-aaaa-aaaa-aaaa');
    expect(mySubscription.displayName).toBe('My Subscription Name');
    expect(mySubscription.name).toBe('My Subscription Name');
  });
  it('Empty Scenario', () => {
    expect(dummySubscription.id).toBe('');
    expect(dummySubscription.subscriptionId).toBe('');
    expect(dummySubscription.tenantId).toBe('');
    expect(dummySubscription.displayName).toBe('');
    expect(dummySubscription.name).toBe('');
  });
});
