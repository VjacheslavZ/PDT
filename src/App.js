import React, { Component } from 'react';
import './App.css';

import { Provider } from 'react-redux';
import store from './store';

import Dashboard from './components/Dashboard/Dashboard';

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <Dashboard/>
        </Provider>
    );
  }
}

export default App;
