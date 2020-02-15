import { DataSourcePlugin } from '@grafana/data';
import { Datasource } from './datasource';
import { AzureMonitorConfigEditor } from './configEditor';
import { AzureMonitorQueryEditor } from './QueryEditor';

export const plugin = new DataSourcePlugin(Datasource).setConfigEditor(AzureMonitorConfigEditor).setQueryEditor(AzureMonitorQueryEditor);
