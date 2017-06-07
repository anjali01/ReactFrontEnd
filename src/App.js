import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Country from './Country.js'
import State from './State.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCountry: ''
    };
  }

  handleChange(event) {
    this.setState({currentCountry: event.target.currentCountry});
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Country-State Matching!</h2>
        </div>
        <p className="App-intro">
          <Country onChange={this.handleChange}/>
          <State currentCountry={this.state.currentCountry}/>
        </p>
      </div>
    );
  }
}

export default App;