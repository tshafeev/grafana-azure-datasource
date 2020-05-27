import { defaults } from 'lodash';
import React, { PureComponent } from 'react';
import { Select } from './../../grafana_ui';
import { SelectableValue } from '@grafana/data';
import { AzureConnection } from './../azure_connection/AzureConnection';
import { AzureSubscription } from './../azure_subscription/AzureSubscription';
import { ServiceHealthQueryStructure } from './ServiceHealth';

class AzureServiceHealthSubscriptionIdQuery extends PureComponent<any, any> {
  state: any = defaults(this.state, { AzureSubscriptions: [] });
  onASCSubscriptionIDChange = (event: SelectableValue) => {
    const acaSubscriptionId = event.value;
    const { query, onChange } = this.props;
    const azCostAnalysis: ServiceHealthQueryStructure = query.azureServiceHealth;
    azCostAnalysis.subscriptionId = acaSubscriptionId;
    onChange({ ...query, azureCostAnalysis: azCostAnalysis });
  };
  componentWillMount() {
    if (this.state.AzureSubscriptions.length === 0) {
      const az: AzureConnection = new AzureConnection(this.props.datasource.instanceSettings);
      az.getSubscriptions().then((res: AzureSubscription[]) => {
        this.setState({
          AzureSubscriptions: res.map(r => {
            return { value: r.subscriptionId, label: r.name } as SelectableValue;
          }),
        });
      });
    }
  }
  render() {
    const { query } = this.props;
    return (
      <div className="gf-form-inline">
        <div className="gf-form">
          <div className="gf-form gf-form--grow">
            <label className="gf-form-label width-12" title="Subscription">
              Subscription
            </label>
            <Select
              className="width-24"
              value={
                this.state.AzureSubscriptions.find((gran: any) => gran.value === query.azureCostAnalysis.subscriptionId) || {
                  label: query.azureCostAnalysis.subscriptionId,
                  value: query.azureCostAnalysis.subscriptionId,
                }
              }
              allowCustomValue
              options={this.state.AzureSubscriptions}
              defaultValue={query.azureCostAnalysis.subscriptionId}
              onChange={this.onASCSubscriptionIDChange}
            />
          </div>
        </div>
      </div>
    );
  }
}
export class AzureServiceHealthQueryEditor extends PureComponent<any> {
  render() {
    const { query, onChange, datasource } = this.props;
    return (
      <div>
        <AzureServiceHealthSubscriptionIdQuery query={query} onChange={onChange} datasource={datasource}></AzureServiceHealthSubscriptionIdQuery>
      </div>
    );
  }
}
