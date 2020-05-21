import React, { PureComponent, ChangeEvent } from 'react';
import { FormLabel, FormField } from '@grafana/ui';

export class AppinsightsQueryEditor extends PureComponent<any, any> {
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
    render() {
        const { query } = this.props;
        return (
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
                            <FormLabel className="width-12" tooltip="Application Insights Query">Query</FormLabel>
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
        )
    }
}