import { defaults } from 'lodash';
import React, { PureComponent, ChangeEvent } from 'react';
import { QueryEditorProps, DataQuery, SelectableValue } from '@grafana/data';
import { FormLabel, Select, FormField, Input } from '@grafana/ui';
import { Datasource } from './datasource';
import * as CONFIG from './config';
import { ACA_SUPPORTED_GRANULARITY, ACA_SUPPORTED_GROUPING_TYPES, ACA_SUPPORTED_GROUPING_DIMENSIONS, ACA_SUPPORTED_FILTER_TYPES } from './azure/azure_costanalysis/AzureCostAnalysis';

const supportedAzureServices = CONFIG.supportedServices as SelectableValue[];
const supportedACAGranularities = ACA_SUPPORTED_GRANULARITY as SelectableValue[];
const supportedACAGroupingTypes = ACA_SUPPORTED_GROUPING_TYPES as SelectableValue[];
const supportedACAGroupingDimensions = ACA_SUPPORTED_GROUPING_DIMENSIONS as SelectableValue[];
const supportedACAFilterTypes = ACA_SUPPORTED_FILTER_TYPES as SelectableValue[];

export interface AzureCostAnalysisGrouping {
  type: string;
  name: string;
}

export interface AzureCostAnalysisFilter {
  FilterType: string;
  Name: string;
  Operator: string;
  Values: string[];
}

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
  azureCostAnalysis?: {
    subscriptionId: string;
    granularity: string;
    grouping: AzureCostAnalysisGrouping[];
    filters: AzureCostAnalysisFilter[];
  };
}

type Props = QueryEditorProps<Datasource, AzureMonitorQuery>;

interface State { }

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
  onACASubscriptionIDChange = (event: ChangeEvent<HTMLInputElement>) => {
    const acaSubscriptionId = event.target.value;
    const { query, onChange } = this.props;
    const azCostAnalysis: any = query.azureCostAnalysis;
    azCostAnalysis.subscriptionId = acaSubscriptionId;
    onChange({ ...query, azureCostAnalysis: azCostAnalysis });
  };
  onACAGroupingTypeChange = (groupingType: SelectableValue) => {
    const gtype = groupingType.value;
    const { query, onChange } = this.props;
    const azCostAnalysis: any = query.azureCostAnalysis;
    azCostAnalysis.grouping = azCostAnalysis.grouping || { type: "Dimension", name: "ServiceName" };
    azCostAnalysis.grouping[0].type = gtype;
    onChange({ ...query, azureCostAnalysis: azCostAnalysis });
  };
  onACAGroupingNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    const groupingName = event.target.value;
    const { query, onChange } = this.props;
    const azCostAnalysis: any = query.azureCostAnalysis;
    azCostAnalysis.grouping = azCostAnalysis.grouping || { type: "Dimension", name: "ServiceName" };
    azCostAnalysis.grouping[0].name = groupingName;
    onChange({ ...query, azureCostAnalysis: azCostAnalysis });
  };
  onACAGroupingNameChangeDimension = (event: SelectableValue) => {
    const groupingName = event.value;
    const { query, onChange } = this.props;
    const azCostAnalysis: any = query.azureCostAnalysis;
    azCostAnalysis.grouping = azCostAnalysis.grouping || { type: "Dimension", name: "ServiceName" };
    azCostAnalysis.grouping[0].name = groupingName;
    onChange({ ...query, azureCostAnalysis: azCostAnalysis });
  };
  onACAGranularityChange = (gran: SelectableValue) => {
    const { query, onChange } = this.props;
    const azCostAnalysis: any = query.azureCostAnalysis;
    azCostAnalysis.granularity = gran.value;
    onChange({ ...query, azureCostAnalysis: azCostAnalysis });
  };
  onACAFilterTypeChange = (event: SelectableValue) => {
    const filtertype = event.value;
    const { query, onChange } = this.props;
    const azCostAnalysis: any = query.azureCostAnalysis;
    azCostAnalysis.filters = azCostAnalysis.filters || [{ FilterType: "None", Name: "None", Operator: "In", Values: [] }];
    azCostAnalysis.filters[0].FilterType = filtertype;
    onChange({ ...query, azureCostAnalysis: azCostAnalysis });
  };
  onACAFilterNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    const filtername = event.target.value;
    const { query, onChange } = this.props;
    const azCostAnalysis: any = query.azureCostAnalysis;
    azCostAnalysis.filters = azCostAnalysis.filters || [{ FilterType: "None", Name: "None", Operator: "In", Values: [] }];
    azCostAnalysis.filters[0].Name = filtername;
    onChange({ ...query, azureCostAnalysis: azCostAnalysis });
  };
  onACAFilterNameChangeDimension = (event: SelectableValue) => {
    const filtername = event.value;
    const { query, onChange } = this.props;
    const azCostAnalysis: any = query.azureCostAnalysis;
    azCostAnalysis.filters = azCostAnalysis.filters || [{ FilterType: "None", Name: "None", Operator: "In", Values: [] }];
    azCostAnalysis.filters[0].Name = filtername;
    onChange({ ...query, azureCostAnalysis: azCostAnalysis });
  };
  onACAFilterOperatorChange = (event: ChangeEvent<HTMLInputElement>) => {
    const operatorname = event.target.value;
    const { query, onChange } = this.props;
    const azCostAnalysis: any = query.azureCostAnalysis;
    azCostAnalysis.filters = azCostAnalysis.filters || [{ FilterType: "None", Name: "None", Operator: "In", Values: [] }];
    azCostAnalysis.filters[0].Operator = operatorname;
    onChange({ ...query, azureCostAnalysis: azCostAnalysis });
  };
  onACAFilterValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    const valuename = event.target.value;
    const { query, onChange } = this.props;
    const azCostAnalysis: any = query.azureCostAnalysis;
    azCostAnalysis.filters = azCostAnalysis.filters || [{ FilterType: "None", Name: "None", Operator: "In", Values: [] }];
    azCostAnalysis.filters[0].Values = valuename.split(",");
    onChange({ ...query, azureCostAnalysis: azCostAnalysis });
  };
  render() {
    const query = defaults(this.props.query, {
      azureResourceGraph: { query: '' },
      azureAppInsights: { query: `` },
      azureLogAnalytics: { query: `` },
      azureCostAnalysis: defaults(this.props.query.azureCostAnalysis, {
        grouping: [{ type: "Dimension", name: "ServiceName" }],
        filters: [{ FilterType: "None", Name: "None", Operator: "In", Values: [] }]
      }),
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
      let GroupingNameField;
      if (query.azureCostAnalysis.grouping[0].type === 'TagKey') {
        GroupingNameField = (
          <div>
            <FormField
              label="Tag Name"
              labelWidth={8}
              inputWidth={16}
              onChange={this.onACAGroupingNameChange}
              value={query.azureCostAnalysis.grouping[0].name}
              placeholder="Tag Name"
              tooltip="Tag Name"
            />
          </div>
        )
      } else if (query.azureCostAnalysis.grouping[0].type === 'Dimension') {
        GroupingNameField = (
          <span>
            <Select
              className="width-24"
              value={supportedACAGroupingDimensions.find((gran: any) => gran.value === query.azureCostAnalysis.grouping[0].name)}
              options={supportedACAGroupingDimensions}
              defaultValue={query.azureCostAnalysis.grouping[0].name}
              onChange={this.onACAGroupingNameChangeDimension}
            />
          </span>
        )
      } else {
        GroupingNameField = (
          <div></div>
        )
      }
      let FilterField;
      if (query.azureCostAnalysis.filters[0].FilterType === "None") {
        FilterField = (<span></span>)
      } else if (query.azureCostAnalysis.filters[0].FilterType === "Dimensions") {
        FilterField = (
          <span>
            <div className="gf-form">
              <div className="gf-form gf-form--grow">
                <Select
                  className="width-12"
                  value={supportedACAGroupingDimensions.find((fil: any) => fil.value === query.azureCostAnalysis.filters[0].Name)}
                  options={supportedACAGroupingDimensions}
                  defaultValue={query.azureCostAnalysis.filters[0].Name}
                  onChange={this.onACAFilterNameChangeDimension}
                />
              </div>
              <div className="gf-form gf-form--grow">
                <Input type="text" className="width-12" title="Operator" placeholder="Operator" value={query.azureCostAnalysis.filters[0].Operator} onChange={this.onACAFilterOperatorChange} disabled></Input>
              </div>
              <div className="gf-form gf-form--grow">
                <Input type="text" className="width-12" title="Values; Comma seperated" placeholder="Values" value={query.azureCostAnalysis.filters[0].Values.join(",")} onChange={this.onACAFilterValueChange} ></Input>
              </div>
            </div>
          </span>
        );
      } else if (query.azureCostAnalysis.filters[0].FilterType === "Tags") {
        FilterField = (
          <span>
            <div className="gf-form">
              <div className="gf-form gf-form--grow">
                <Input type="text" className="width-12" title="Tag Name" placeholder="Tag Name" value={query.azureCostAnalysis.filters[0].Name} onChange={this.onACAFilterNameChange} ></Input>
              </div>
              <div className="gf-form gf-form--grow">
                <Input type="text" className="width-12" title="Operator" placeholder="Operator" value={query.azureCostAnalysis.filters[0].Operator} onChange={this.onACAFilterOperatorChange} disabled></Input>
              </div>
              <div className="gf-form gf-form--grow">
                <Input type="text" className="width-12" title="Tags; Comma seperated" placeholder="Tags" value={query.azureCostAnalysis.filters[0].Values.join(",")} onChange={this.onACAFilterValueChange} ></Input>
              </div>
            </div>
          </span>
        );
      }
      QueryEditor = (
        <div>
          <div className="gf-form-inline">
            <div className="gf-form">
              <div className="gf-form gf-form--grow">
                <FormField
                  label="Subscription ID"
                  labelWidth={12}
                  inputWidth={24}
                  onChange={this.onACASubscriptionIDChange}
                  value={query.azureCostAnalysis.subscriptionId}
                  placeholder="Subscription ID"
                  tooltip="Subscription GUID"
                />
              </div>
            </div>
          </div>
          <div className="gf-form-inline">
            <div className="gf-form">
              <div className="gf-form gf-form--grow">
                <FormLabel className="width-12" tooltip="Granularity">
                  Granularity
                    </FormLabel>
                <Select
                  className="width-24"
                  value={supportedACAGranularities.find((gran: any) => gran.value === query.azureCostAnalysis.granularity)}
                  options={supportedACAGranularities}
                  defaultValue={query.azureCostAnalysis.granularity}
                  onChange={this.onACAGranularityChange}
                />
              </div>
            </div>
          </div>
          <div className="gf-form-inline">
            <div className="gf-form">
              <div className="gf-form gf-form--grow">
                <FormLabel className="width-12" tooltip="Group by">
                  Group by
              </FormLabel>
                <Select
                  className="width-12"
                  value={supportedACAGroupingTypes.find((gran: any) => gran.value === query.azureCostAnalysis.grouping[0].type)}
                  options={supportedACAGroupingTypes}
                  defaultValue={query.azureCostAnalysis.grouping[0].type}
                  onChange={this.onACAGroupingTypeChange}
                />{GroupingNameField}
              </div>
            </div>
          </div>
          <div className="gf-form-inline">
            <div className="gf-form">
              <div className="gf-form gf-form--grow">
                <FormLabel className="width-12" tooltip="Filter">
                  Filter
                </FormLabel>
              </div>
            </div>
            <div className="gf-form">
              <div className="gf-form gf-form--grow">
                <Select
                  className="width-12"
                  value={supportedACAFilterTypes.find((gran: any) => gran.value === query.azureCostAnalysis.filters[0].FilterType)}
                  options={supportedACAFilterTypes}
                  defaultValue={query.azureCostAnalysis.filters[0].FilterType}
                  onChange={this.onACAFilterTypeChange}
                />
              </div>
            </div>
            {FilterField}
          </div>
        </div>
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
