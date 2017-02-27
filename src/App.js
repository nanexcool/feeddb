import React, { Component } from 'react';
import web3 from './web3';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      network: {
        accounts: null,
        defaultAccount: null,
      }
    };

    this.checkAccounts = this.checkAccounts.bind(this);
  }

  componentDidMount() {
    this.checkAccounts();
    this.checkAccountsInterval = setInterval(this.checkAccounts, 10000);
  }

  componentWillUnmount() {
    clearInterval(this.checkAccountsInterval);
  }

  checkAccounts() {
    web3.eth.getAccounts((error, accounts) => {
      if (!error) {
        const networkState = {...this.state.network};
        networkState['accounts'] = accounts;
        networkState['defaultAccount'] = accounts[0];
        this.setState({ network: networkState });
      }
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to FeedDB</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>{this.state.network.defaultAccount}</p>
      </div>
    );
  }
}

export default App;
