import React, { PureComponent, ChangeEvent } from 'react';
import { FormField, FormLabel, Select, Input } from '@grafana/ui';
import { SelectableValue } from "@grafana/data";

const Granularities: SelectableValue[] = [
  { value: "None", label: "None" },
  { value: "Daily", label: "Daily" },
  { value: "Monthly", label: "Monthly" }
];
const GroupingTypes: SelectableValue[] = [
  { value: "None", label: "None" },
  { value: "Dimension", label: "Dimension" },
  { value: "TagKey", label: "Tag" },
];
const GroupingDimensions: SelectableValue[] = [
  { value: "ResourceId", label: "Resource" },
  { value: "ResourceType", label: "Resource Type" },
  { value: "ResourceLocation", label: "Resource Location" },
  { value: "ResourceGroupName", label: "Resource Group Name" },
  { value: "ServiceName", label: "Service Name" },
  { value: "ServiceTier", label: "Service Tier" },
  { value: "Meter", label: "Meter" },
  { value: "MeterCategory", label: "Meter Category" },
  { value: "MeterSubCategory", label: "Meter SubCategory" },
  { value: "PricingModel", label: "Pricing Model" },
  { value: "PublisherType", label: "Publisher Type" },
  { value: "ChargeType", label: "Charge Type" },
];
const FilterTypes: SelectableValue[] = [
  { value: "None", label: "None" },
  { value: "Dimensions", label: "Dimensions" },
  { value: "Tags", label: "Tags" },
];

class AzureCostAnalysisSubscriptionIdQuery extends PureComponent<any> {
  onACASubscriptionIDChange = (event: ChangeEvent<HTMLInputElement>) => {
    const acaSubscriptionId = event.target.value;
    const { query, onChange } = this.props;
    const azCostAnalysis: any = query.azureCostAnalysis;
    azCostAnalysis.subscriptionId = acaSubscriptionId;
    onChange({ ...query, azureCostAnalysis: azCostAnalysis });
  };
  render() {
    const { query } = this.props;
    return (
      <div className="gf-form-inline">
        <div className="gf-form">
          <div className="gf-form gf-form--grow">
            <FormField label="Subscription ID" labelWidth={12} inputWidth={24} value={query.azureCostAnalysis.subscriptionId} placeholder="Subscription ID" tooltip="Subscription GUID" onChange={this.onACASubscriptionIDChange} />
          </div>
        </div>
      </div>
    )
  }
}
class AzureCostAnalysisGranularityQuery extends PureComponent<any> {
  onACAGranularityChange = (gran: SelectableValue) => {
    const { query, onChange } = this.props;
    const azCostAnalysis: any = query.azureCostAnalysis;
    azCostAnalysis.granularity = gran.value;
    onChange({ ...query, azureCostAnalysis: azCostAnalysis });
  };
  render() {
    const { query } = this.props;
    return (
      <div className="gf-form-inline">
        <div className="gf-form">
          <div className="gf-form gf-form--grow">
            <FormLabel className="width-12" tooltip="Granularity"> Granularity</FormLabel>
            <Select className="width-24" value={Granularities.find((gran: any) => gran.value === query.azureCostAnalysis.granularity)} options={Granularities} defaultValue={query.azureCostAnalysis.granularity} onChange={this.onACAGranularityChange} />
          </div>
        </div>
      </div>
    )
  }
}
class AzureCostAnalysisGroupingQuery extends PureComponent<any> {
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
  render() {
    const { query } = this.props;
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
            value={GroupingDimensions.find((gran: any) => gran.value === query.azureCostAnalysis.grouping[0].name)}
            options={GroupingDimensions}
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
    return (
      <div className="gf-form-inline">
        <div className="gf-form">
          <div className="gf-form gf-form--grow">
            <FormLabel className="width-12" tooltip="Group by">Group by</FormLabel>
            <Select className="width-12" value={GroupingTypes.find((gran: any) => gran.value === query.azureCostAnalysis.grouping[0].type)} options={GroupingTypes} defaultValue={query.azureCostAnalysis.grouping[0].type} onChange={this.onACAGroupingTypeChange} />
            <span>{GroupingNameField}</span>
          </div>
        </div>
      </div>
    )
  }
}
class AzureCostAnalysisFilterQuery extends PureComponent<any> {
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
    const { query } = this.props;
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
                value={GroupingDimensions.find((fil: any) => fil.value === query.azureCostAnalysis.filters[0].Name)}
                options={GroupingDimensions}
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
    return (
      <div className="gf-form-inline">
        <div className="gf-form">
          <div className="gf-form gf-form--grow">
            <FormLabel className="width-12" tooltip="Filter">Filter</FormLabel>
          </div>
        </div>
        <div className="gf-form">
          <div className="gf-form gf-form--grow">
            <Select
              className="width-12"
              value={FilterTypes.find((gran: any) => gran.value === query.azureCostAnalysis.filters[0].FilterType)}
              options={FilterTypes}
              defaultValue={query.azureCostAnalysis.filters[0].FilterType}
              onChange={this.onACAFilterTypeChange}
            />
          </div>
        </div>
        <div>{FilterField}</div>
      </div>
    )
  }
}

export class AzureCostAnalysisQueryEditor extends PureComponent<any> {
  render() {
    const { query, onChange } = this.props;
    return (
      <div>
        <AzureCostAnalysisSubscriptionIdQuery query={query} onChange={onChange}></AzureCostAnalysisSubscriptionIdQuery>
        <AzureCostAnalysisGranularityQuery query={query} onChange={onChange}></AzureCostAnalysisGranularityQuery>
        <AzureCostAnalysisGroupingQuery query={query} onChange={onChange}></AzureCostAnalysisGroupingQuery>
        <AzureCostAnalysisFilterQuery query={query} onChange={onChange}></AzureCostAnalysisFilterQuery>
      </div>
    );
  }
}
