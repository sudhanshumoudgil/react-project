import React, { Component } from 'react';
import './Sample.css';
import { i18n } from './utils';

class Sample extends Component {
  render() {
    let addTitle = this.props.addTitle;
    return (
      <div className="Sample">
        <div className="Sample-header">
          <h2>{i18n._t('Sample component: %1', [addTitle])}</h2>
        </div>
        <p className="Sample-body">
          {i18n._t('You can place as many sample components on the page as you wish.')}
        </p>
      </div>
    );
  }
}

export default Sample;
