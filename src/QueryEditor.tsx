import { defaults } from 'lodash';
import React, { PureComponent, ChangeEvent } from 'react';
import { QueryEditorProps, DataQuery, SelectableValue } from '@grafana/data';
import { FormLabel, Select, FormField } from '@grafana/ui';
import { Datasource } from './datasource';
import * as CONFIG from './config';
import { AzureResourceGraphQueryEditor, AzureResourceGraphQueryStructure, DEFAULT_RESOURCE_GRAPH_QUERY } from './azure/resource_graph/ResourceGraph';
import {
  AzureCostAnalysisQueryEditor,
  AzureCostAnalysisQueryStructure,
  DEFAULT_COST_ANALYSIS_QUERY,
} from './azure/azure_costanalysis/AzureCostAnalysis';

const supportedAzureServices = CONFIG.supportedServices as SelectableValue[];

type Props = QueryEditorProps<Datasource, AzureMonitorQuery>;

interface State {}

export interface AzureMonitorQuery extends DataQuery {
  queryType?: string;
  azureResourceGraph?: AzureResourceGraphQueryStructure;
  azureAppInsights?: {
    appInsightsAppId: string;
    query: string;
  };
  azureLogAnalytics?: {
    workspace: string;
    query: string;
  };
  azureCostAnalysis?: AzureCostAnalysisQueryStructure;
}

export class AzureMonitorQueryEditor extends PureComponent<Props, State> {
  state: State = {};
  onServiceTypeChange = (service: SelectableValue) => {
    const { query, onChange } = this.props;
    onChange({ ...query, queryType: service.value });
  };
  onAppInsightsAppIDChange = (event: ChangeEvent<HTMLInputElement>) => {
    const appId = event.target.value;
    const { query, onChange } = this.props;
    const azAppInsights: any = query.azureAppInsights;
    azAppInsights.appInsightsAppId = appId;
    onChange({ ...query, azureAppInsights: azAppInsights });
  };
  onAppInsightsQueryChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const aiQuery = event.target.value;
    const { query, onChange } = this.props;
    const azAppInsights: any = query.azureAppInsights;
    azAppInsights.query = aiQuery;
    onChange({ ...query, azureAppInsights: azAppInsights });
  };
  onLAWorkspaceIDChange = (event: ChangeEvent<HTMLInputElement>) => {
    const laId = event.target.value;
    const { query, onChange } = this.props;
    const azLogAnalytics: any = query.azureLogAnalytics;
    azLogAnalytics.workspace = laId;
    onChange({ ...query, azureLogAnalytics: azLogAnalytics });
  };
  onLAQueryChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const laQuery = event.target.value;
    const { query, onChange } = this.props;
    const azLogAnalytics: any = query.azureLogAnalytics;
    azLogAnalytics.query = laQuery;
    onChange({ ...query, azureLogAnalytics: azLogAnalytics });
  };
  render() {
    const query = defaults(this.props.query, {
      azureResourceGraph: defaults(this.props.query.azureResourceGraph, DEFAULT_RESOURCE_GRAPH_QUERY),
      azureAppInsights: { query: `` },
      azureLogAnalytics: { query: `` },
      azureCostAnalysis: defaults(this.props.query.azureCostAnalysis, DEFAULT_COST_ANALYSIS_QUERY),
    });
    let QueryEditor;
    if (query.queryType === CONFIG.AzureResourceGraph) {
      QueryEditor = <AzureResourceGraphQueryEditor onChange={this.props.onChange} query={query} datasource={this.props.datasource} />;
    } else if (query.queryType === CONFIG.AzureApplicationInsights) {
      QueryEditor = (
        <div>
          <div className="gf-form-inline">
            <div className="gf-form">
              <div className="gf-form gf-form--grow">
                <FormField
                  label="Application Insights ID"
                  labelWidth={12}
                  inputWidth={24}
                  onChange={this.onAppInsightsAppIDChange}
                  value={query.azureAppInsights.appInsightsAppId || ''}
                  placeholder="XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX"
                  tooltip="AppInsights ID"
                />
              </div>
            </div>
          </div>
          <div className="gf-form-inline">
            <div className="gf-form">
              <div className="gf-form gf-form--grow">
                <FormLabel className="width-12" tooltip="Application Insights Query">
                  Query
                </FormLabel>
                <textarea
                  value={query.azureAppInsights.query || ''}
                  onChange={this.onAppInsightsQueryChange}
                  className="gf-form-input min-width-30 width-30"
                  rows={10}
                />
              </div>
            </div>
          </div>
        </div>
      );
    } else if (query.queryType === CONFIG.AzureLogAnalytics) {
      QueryEditor = (
        <div>
          <div className="gf-form-inline">
            <div className="gf-form">
              <div className="gf-form gf-form--grow">
                <FormField
                  label="Workspace ID"
                  labelWidth={12}
                  inputWidth={24}
                  onChange={this.onLAWorkspaceIDChange}
                  value={query.azureLogAnalytics.workspace || ''}
                  placeholder="XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX"
                  tooltip="Log Anlaytics workspace ID"
                />
              </div>
            </div>
          </div>
          <div className="gf-form-inline">
            <div className="gf-form">
              <div className="gf-form gf-form--grow">
                <FormLabel className="width-12" tooltip="Log Analytics Query">
                  Query
                </FormLabel>
                <textarea
                  value={query.azureLogAnalytics.query || ''}
                  onChange={this.onLAQueryChange}
                  className="gf-form-input min-width-30 width-30"
                  rows={10}
                />
              </div>
            </div>
          </div>
        </div>
      );
    } else if (query.queryType === CONFIG.AzureCostAnalysis) {
      QueryEditor = <AzureCostAnalysisQueryEditor onChange={this.props.onChange} query={query} datasource={this.props.datasource} />;
    }
    return (
      <div>
        <div className="gf-form-inline">
          <div className="gf-form">
            <FormLabel className="width-12" tooltip="Service Type">
              Service
            </FormLabel>
            <Select
              className="width-24"
              value={supportedAzureServices.find((service: any) => service.value === query.queryType)}
              options={supportedAzureServices}
              defaultValue={query.queryType}
              onChange={this.onServiceTypeChange}
            />
          </div>
        </div>
        <div className="gf-form-inline">
          <div className="gf-form">{QueryEditor}</div>
        </div>
      </div>
    );
  }
}
