import React, { PureComponent, ChangeEvent } from 'react';

export class LogAnalyticsQueryEditor extends PureComponent<any, any> {
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
    const { query } = this.props;
    return (
      <div>
        <div className="gf-form-inline">
          <div className="gf-form">
            <div className="gf-form gf-form--grow">
              <label className="gf-form-label width-12" title="Workspace ID">
                Workspace ID
              </label>
              <input
                className="gf-form-input width-24"
                type="text"
                onChange={this.onLAWorkspaceIDChange}
                value={query.azureLogAnalytics.workspace || ''}
                placeholder="XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX"
                title="Log Analytics workspace ID"
              ></input>
            </div>
          </div>
        </div>
        <div className="gf-form-inline">
          <div className="gf-form">
            <div className="gf-form gf-form--grow">
              <label className="gf-form-label width-12" title="Log Analytics Query">
                Query
              </label>
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
  }
}
