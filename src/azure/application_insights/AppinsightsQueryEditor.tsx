import React, { PureComponent, ChangeEvent } from 'react';

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
              <label className="gf-form-label width-12" title="Top">
                Application Insights ID
              </label>
              <input
                className="gf-form-input width-24"
                type="text"
                onChange={this.onAppInsightsAppIDChange}
                value={query.azureAppInsights.appInsightsAppId || ''}
                placeholder="XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX"
                title="AppInsights ID"
              ></input>
            </div>
          </div>
        </div>
        <div className="gf-form-inline">
          <div className="gf-form">
            <div className="gf-form gf-form--grow">
              <label className="gf-form-label width-12" title="Application Insights Query">
                Query
              </label>
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
  }
}
