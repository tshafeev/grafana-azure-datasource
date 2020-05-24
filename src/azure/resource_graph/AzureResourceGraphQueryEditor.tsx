import React, { PureComponent, ChangeEvent } from 'react';

export class AzureResourceGraphQueryEditor extends PureComponent<any> {
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
  render() {
    const { query } = this.props;
    return (
      <div>
        <div>
          <div className="gf-form-inline">
            <div className="gf-form">
              <div className="gf-form gf-form--grow">
                <label className="gf-form-label width-12" title="Resource Graph Query">
                  Query
                </label>
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
                <label className="gf-form-label width-12" title="Top">
                  Top
                </label>
                <input
                  className="gf-form-input width-9"
                  type="text"
                  onChange={this.onResourceGraphTopChange}
                  value={query.azureResourceGraph.top}
                  placeholder="1000"
                  title="Top N Results. Default / Max is 1000"
                ></input>
                <div className="gf-form">
                  <div className="width-1"></div>
                </div>
                <label className="gf-form-label width-12" title="Skip">
                  Skip
                </label>
                <input
                  className="gf-form-input width-9"
                  type="text"
                  onChange={this.onResourceGraphSkipChange}
                  value={query.azureResourceGraph.skip}
                  placeholder="0"
                  title="Skip N Results. Default 0"
                ></input>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
