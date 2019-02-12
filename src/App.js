import React, { Component } from 'react';
import Table from './Components/Table';
import Controls from './Components/Controls';
import './App.css';
import appStore from './Store/Store';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Employee Table</h1>
        <Controls EmployeeStore={appStore}/>
        <Table EmployeeStore={appStore}/>
      </div>
    );
  }
}

export default App;
