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
  onACAFilteAdd = ()=> {
    const { query, onChange } = this.props;
    const azCostAnalysis: any = query.azureCostAnalysis;
    azCostAnalysis.filters = azCostAnalysis.filters || [{ FilterType: "None", Name: "None", Operator: "In", Values: [] }];
    azCostAnalysis.filters.push({ FilterType: "None", Name: "None", Operator: "In", Values: [] });
    onChange({ ...query, azureCostAnalysis: azCostAnalysis });
  }
  onACAFilterRemove = (index: number)=> {
    const { query, onChange } = this.props;
    const azCostAnalysis: any = query.azureCostAnalysis;
    azCostAnalysis.filters = azCostAnalysis.filters || [{ FilterType: "None", Name: "None", Operator: "In", Values: [] }];
    azCostAnalysis.filters.splice(index, 1)
    onChange({ ...query, azureCostAnalysis: azCostAnalysis });
  }
  onACAFilterTypeChange = (event: SelectableValue, index: number) => {
    const filtertype = event.value;
    const { query, onChange } = this.props;
    const azCostAnalysis: any = query.azureCostAnalysis;
    azCostAnalysis.filters = azCostAnalysis.filters || [{ FilterType: "None", Name: "None", Operator: "In", Values: [] }];
    azCostAnalysis.filters[index].FilterType = filtertype;
    onChange({ ...query, azureCostAnalysis: azCostAnalysis });
  };
  onACAFilterNameChange = (event: ChangeEvent<HTMLInputElement>, index: number) => {
    const filtername = event.target.value;
    const { query, onChange } = this.props;
    const azCostAnalysis: any = query.azureCostAnalysis;
    azCostAnalysis.filters = azCostAnalysis.filters || [{ FilterType: "None", Name: "None", Operator: "In", Values: [] }];
    azCostAnalysis.filters[index].Name = filtername;
    onChange({ ...query, azureCostAnalysis: azCostAnalysis });
  };
  onACAFilterNameChangeDimension = (event: SelectableValue, index: number) => {
    const filtername = event.value;
    const { query, onChange } = this.props;
    const azCostAnalysis: any = query.azureCostAnalysis;
    azCostAnalysis.filters = azCostAnalysis.filters || [{ FilterType: "None", Name: "None", Operator: "In", Values: [] }];
    azCostAnalysis.filters[index].Name = filtername;
    onChange({ ...query, azureCostAnalysis: azCostAnalysis });
  };
  onACAFilterOperatorChange = (event: ChangeEvent<HTMLInputElement>, index: number) => {
    const operatorname = event.target.value;
    const { query, onChange } = this.props;
    const azCostAnalysis: any = query.azureCostAnalysis;
    azCostAnalysis.filters = azCostAnalysis.filters || [{ FilterType: "None", Name: "None", Operator: "In", Values: [] }];
    azCostAnalysis.filters[index].Operator = operatorname;
    onChange({ ...query, azureCostAnalysis: azCostAnalysis });
  };
  onACAFilterValueChange = (event: ChangeEvent<HTMLInputElement>, index: number) => {
    const valuename = event.target.value;
    const { query, onChange } = this.props;
    const azCostAnalysis: any = query.azureCostAnalysis;
    azCostAnalysis.filters = azCostAnalysis.filters || [{ FilterType: "None", Name: "None", Operator: "In", Values: [] }];
    azCostAnalysis.filters[index].Values = valuename.split(",");
    onChange({ ...query, azureCostAnalysis: azCostAnalysis });
  };
  render() {
    const { query } = this.props;
    return (
      <div>
        { query.azureCostAnalysis.filters.length === 0 ? (
          <div className="gf-form-inline">
            <div className="gf-form">
              <div className="gf-form gf-form--grow">
                <FormLabel className="width-12" tooltip="Filter">Filter</FormLabel>
              </div>
            </div>
            <div className="gf-form">
              <div className="gf-form gf-form--grow">
                <span className="btn btn-success btn-small" style={{'margin': '5px' }} onClick={this.onACAFilteAdd}>Add Filter</span>
              </div>
            </div>
          </div>
        ): null }
        { query.azureCostAnalysis.filters.map((filter:any,index:number)=>(
          <div className="gf-form-inline">
            <div className="gf-form">
              <div className="gf-form gf-form--grow">
                <FormLabel className="width-12" tooltip="Filter">Filter {index+1}</FormLabel>
              </div>
            </div>
            <div className="gf-form">
              <div className="gf-form gf-form--grow">
                <Select
                  className="width-12"
                  value={FilterTypes.find((gran: any) => gran.value === filter.FilterType)}
                  options={FilterTypes}
                  defaultValue={filter.FilterType}
                  onChange={(e) => this.onACAFilterTypeChange(e, index)}
                />
              </div>
            </div>
            <div>
              {filter.FilterType === "None" ? <span>
                <div className="gf-form">
                  <div className="gf-form gf-form--grow">
                    <span className="btn btn-success btn-small" style={{'margin': '5px' }} onClick={this.onACAFilteAdd}>+</span>
                    <span className="btn btn-danger btn-small" style={{'margin': '5px' }} onClick={()=>this.onACAFilterRemove(index)}>x</span>
                  </div>
                </div>
              </span> : null}
              {filter.FilterType === "Dimensions" ? (
                <span>
                  <div className="gf-form">
                    <div className="gf-form gf-form--grow">
                      <Select
                        className="width-12"
                        value={GroupingDimensions.find((fil: any) => fil.value === filter.Name)}
                        options={GroupingDimensions}
                        defaultValue={filter.Name}
                        onChange={(e) => this.onACAFilterNameChangeDimension(e, index)}
                      />
                    </div>
                    <div className="gf-form gf-form--grow">
                      <Input type="text" className="width-12" title="Operator" placeholder="Operator" value={filter.Operator} onChange={(e) => this.onACAFilterOperatorChange(e, index)} disabled></Input>
                    </div>
                    <div className="gf-form gf-form--grow">
                      <Input type="text" className="width-12" title="Values; Comma seperated" placeholder="Values" value={filter.Values.join(",")} onChange={(e) => this.onACAFilterValueChange(e, index)} ></Input>
                    </div>
                    <div className="gf-form gf-form--grow">
                      <span className="btn btn-success btn-small" style={{'margin': '5px' }} onClick={this.onACAFilteAdd}>+</span>
                      <span className="btn btn-danger btn-small" style={{'margin': '5px' }} onClick={()=>this.onACAFilterRemove(index)}>x</span>
                    </div>
                  </div>
                </span>
              ) : null}
              {filter.FilterType === "Tags" ? (
                <span>
                  <div className="gf-form">
                    <div className="gf-form gf-form--grow">
                      <Input type="text" className="width-12" title="Tag Name" placeholder="Tag Name" value={filter.Name} onChange={(e)=>this.onACAFilterNameChange(e,index)} ></Input>
                    </div>
                    <div className="gf-form gf-form--grow">
                      <Input type="text" className="width-12" title="Operator" placeholder="Operator" value={filter.Operator} onChange={(e)=>this.onACAFilterOperatorChange(e,index)} disabled></Input>
                    </div>
                    <div className="gf-form gf-form--grow">
                      <Input type="text" className="width-12" title="Tags; Comma seperated" placeholder="Tags" value={filter.Values.join(",")} onChange={(e)=>this.onACAFilterValueChange(e,index)} ></Input>
                    </div>
                    <div className="gf-form gf-form--grow">
                      <span className="btn btn-success btn-small" style={{'margin': '5px' }} onClick={this.onACAFilteAdd}>+</span>
                      <span className="btn btn-danger btn-small" style={{'margin': '5px' }} onClick={()=>this.onACAFilterRemove(index)}>x</span>
                    </div>
                  </div>
                </span>
              ) : null}
            </div>
          </div>
        ))}
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
