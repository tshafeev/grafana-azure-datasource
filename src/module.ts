import { DataSourcePlugin } from '@grafana/data';
import { Datasource } from './datasource';
import { AzureMonitorConfigEditor } from './editors/configEditor';
import { AzureMonitorQueryEditor } from './editors/QueryEditor';

export const plugin = new DataSourcePlugin(Datasource).setConfigEditor(AzureMonitorConfigEditor).setQueryEditor(AzureMonitorQueryEditor);
