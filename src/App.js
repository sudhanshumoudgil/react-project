import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Sample from './Sample';
import { getRandomTitle, i18n, i18nCtrl, embraceWithCode } from './utils';

class App extends Component {
  constructor() {
    super();
    this.state = {samples: [], loadedLocale: 'en'};
  }

  addSample() {
    this.setState({
      samples: this.state.samples.concat([getRandomTitle()]),
      loadedLocale: this.state.loadedLocale
    });
  }

  loadRussianLocale() {
    i18nCtrl.setLocale('ru', (localeName) => {
      this.setState({samples: this.state.samples, loadedLocale: localeName});
      this.forceUpdate();
    }, (error) => console.log(error));
  }
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{i18n._t('Welcome to React')}</h2>
        </div>
        <p className="App-intro">
          {embraceWithCode(i18n._t('To get started, edit `src/App.js` and save to reload.'))}
        </p>
        <div>
        <button onClick={() => this.addSample()}>{i18n._t('Add new sample block!')}</button>
        {
          this.state.loadedLocale !== 'ru'
            ? <button onClick={() => this.loadRussianLocale()}>{i18n._t('Load Russian locale')}</button>
            : null
        }
          <div>{i18n._nt([
            'Now we have %% component on page!',
            'Now we have %% components on page!'
          ], this.state.samples.length)}</div>
          <div>{i18n._ngg([
            'This counter of %% component will not be translated',
            'This counter of %% components will not be translated'
          ], this.state.samples.length)}</div>
        </div>
        <div>
          {/* 
               Note: addTitles inside Sample components will not be updated 
               on locale change, because their values are stored in parent 
               component's local state.
          */}
          {this.state.samples.map((value, idx) => <Sample key={idx} addTitle={value} />)}
        </div>
      </div>
    );
  }
}

export default App;
