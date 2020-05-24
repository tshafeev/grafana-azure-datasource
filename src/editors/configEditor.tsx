import React, { PureComponent, ChangeEvent } from 'react';
import { DataSourcePluginOptionsEditorProps, DataSourceJsonData, SelectableValue } from '@grafana/data';
import { SecretFormField, FormField, Select } from './../grafana_ui';
import * as CONFIG from './../config';

const supportedCloudnames = CONFIG.supportedCloudnames as SelectableValue[];

export interface AzureMonitorDataSourceOptions extends DataSourceJsonData {
  cloudName?: string;
  tenantId?: string;
  clientId?: string;
}
export interface AzureMonitorSecureJsonData {
  clientSecret?: string;
}

interface Props extends DataSourcePluginOptionsEditorProps<AzureMonitorDataSourceOptions> {}

interface State {}

export class AzureMonitorConfigEditor extends PureComponent<Props, State> {
  onCloudNameChange = (cloudName: SelectableValue<string>) => {
    const { onOptionsChange, options } = this.props;
    const jsonData = {
      ...options.jsonData,
      cloudName: cloudName.value,
    };
    onOptionsChange({ ...options, jsonData });
  };

  onTenantIdChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { onOptionsChange, options } = this.props;
    const jsonData = {
      ...options.jsonData,
      tenantId: event.target.value,
    };
    onOptionsChange({ ...options, jsonData });
  };

  onClientIdChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { onOptionsChange, options } = this.props;
    const jsonData = {
      ...options.jsonData,
      clientId: event.target.value,
    };
    onOptionsChange({ ...options, jsonData });
  };

  onClientSecretChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { onOptionsChange, options } = this.props;
    onOptionsChange({
      ...options,
      secureJsonData: {
        clientSecret: event.target.value,
      },
    });
  };

  onResetclientSecret = () => {
    const { onOptionsChange, options } = this.props;
    onOptionsChange({
      ...options,
      secureJsonFields: {
        ...options.secureJsonFields,
        clientSecret: false,
      },
      secureJsonData: {
        ...options.secureJsonData,
        clientSecret: '',
      },
    });
  };

  render() {
    const { options } = this.props;
    const secureJsonData = (options.secureJsonData || {}) as AzureMonitorSecureJsonData;
    options.jsonData.cloudName = options.jsonData.cloudName || 'azuremonitor';
    const { jsonData, secureJsonFields } = options;

    return (
      <div className="gf-form-group">
        <div className="gf-form">
          <label className='gf-form-label width-10' title='Choose an Azure cloud Type'>Cloud Type</label>
          <Select
            className="width-24"
            value={supportedCloudnames.find((cloud: any) => cloud.value === jsonData.cloudName)}
            options={supportedCloudnames}
            defaultValue={jsonData.cloudName}
            onChange={this.onCloudNameChange}
          />
        </div>
        <div className="gf-form">
          <FormField
            label="Tenant ID"
            labelWidth={10}
            inputWidth={24}
            onChange={this.onTenantIdChange}
            value={jsonData.tenantId || ''}
            placeholder="XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX"
            tooltip="Tenant ID"
          />
        </div>
        <div className="gf-form">
          <FormField
            label="Client ID"
            labelWidth={10}
            inputWidth={24}
            onChange={this.onClientIdChange}
            value={jsonData.clientId || ''}
            placeholder="XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX"
            tooltip="Client ID"
          />
        </div>
        <div className="gf-form-inline">
          <div className="gf-form">
            <SecretFormField
              isConfigured={(secureJsonFields && secureJsonFields.clientSecret) as boolean}
              value={secureJsonData.clientSecret || ''}
              label="API Key"
              placeholder="Client Secret"
              labelWidth={10}
              inputWidth={24}
              onReset={this.onResetclientSecret}
              onChange={this.onClientSecretChange}
            />
          </div>
        </div>
      </div>
    );
  }
}
