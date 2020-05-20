import { defaults } from 'lodash';
import React, { PureComponent, ChangeEvent } from 'react';
import { QueryEditorProps, DataQuery, SelectableValue } from '@grafana/data';
import { FormLabel, Select, FormField } from '@grafana/ui';
import { Datasource } from './datasource';
import * as CONFIG from './config';
import { AzureCostAnalysisQueryEditor, AzureCostAnalysisQueryStructure, DEFAULT_COST_ANALYSIS_QUERY } from "./azure/azure_costanalysis/AzureCostAnalysis";

const supportedAzureServices = CONFIG.supportedServices as SelectableValue[];

type Props = QueryEditorProps<Datasource, AzureMonitorQuery>;

interface State { }

export interface AzureMonitorQuery extends DataQuery {
  queryType?: string;
  azureResourceGraph?: {
    query: string;
    top: number;
    skip: number;
  };
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
  onResourceGraphQueryChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const rgQuery = event.target.value;
    const { query, onChange } = this.props;
    const azResourceGraph: any = query.azureResourceGraph;
    azResourceGraph.query = rgQuery;
    onChange({ ...query, azureResourceGraph: azResourceGraph });
  };
  onResourceGraphTopChange = (event: ChangeEvent<HTMLInputElement>) => {
    const rgTop = event.target.value;
    const { query, onChange } = this.props;
    const azResourceGraph: any = query.azureResourceGraph;
    azResourceGraph.top = rgTop;
    onChange({ ...query, azureResourceGraph: azResourceGraph });
  };
  onResourceGraphSkipChange = (event: ChangeEvent<HTMLInputElement>) => {
    const rgSkip = event.target.value;
    const { query, onChange } = this.props;
    const azResourceGraph: any = query.azureResourceGraph;
    azResourceGraph.skip = rgSkip;
    onChange({ ...query, azureResourceGraph: azResourceGraph });
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
      azureResourceGraph: { query: '' },
      azureAppInsights: { query: `` },
      azureLogAnalytics: { query: `` },
      azureCostAnalysis: defaults(this.props.query.azureCostAnalysis, DEFAULT_COST_ANALYSIS_QUERY),
    });
    let QueryEditor;
    if (query.queryType === CONFIG.AzureResourceGraph) {
      QueryEditor = (
        <div>
          <div className="gf-form-inline">
            <div className="gf-form">
              <div className="gf-form gf-form--grow">
                <FormLabel className="width-12" tooltip="Resource Graph Query">
                  Query
                </FormLabel>
                <textarea
                  value={query.azureResourceGraph.query || ''}
                  onChange={this.onResourceGraphQueryChange}
                  className="gf-form-input min-width-30 width-30"
                  rows={10}
                />
              </div>
            </div>
          </div>
          <div className="gf-form-inline">
            <div className="gf-form">
              <div className="gf-form gf-form--grow">
                <FormField
                  label="Top"
                  labelWidth={12}
                  inputWidth={9}
                  onChange={this.onResourceGraphTopChange}
                  value={query.azureResourceGraph.top}
                  placeholder="1000"
                  tooltip="Top N Results. Default / Max is 1000"
                />
                <div className="gf-form">
                  <div className="width-1"></div>
                </div>
                <FormField
                  label="Skip"
                  labelWidth={12}
                  inputWidth={9}
                  onChange={this.onResourceGraphSkipChange}
                  value={query.azureResourceGraph.skip}
                  placeholder="0"
                  tooltip="Skip N Results. Default 0"
                />
              </div>
            </div>
          </div>
        </div>
      );
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
      QueryEditor = (
        <AzureCostAnalysisQueryEditor onChange={this.props.onChange} query={query} />
      );
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
