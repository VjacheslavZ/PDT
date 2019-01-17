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

/*
* TODO
* trademark_case_file:
    base_application_form:
*
* */

const mapStateToProprs = state => ({});

export default App;
