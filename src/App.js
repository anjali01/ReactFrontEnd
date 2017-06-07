import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dropdown from './Dropdown.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.currentState = {
      currentCountry: ''
    };
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Country-State Matching!</h2>
        </div>
        <p className="App-intro">
          <Dropdown />
        </p>
      </div>
    );
  }
}

export default App;