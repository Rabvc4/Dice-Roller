import React, { Component } from 'react';
import NavBar from './NavBar';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar></NavBar>
        <header className="App-header">
          <img src="https://cdn1.iconfinder.com/data/icons/sin-city-memories/128/dice-red-256.png" className="App-logo" alt="logo" />
          <h1 className="App-title">Dungeons & Dragons Dice Roller</h1>
        </header>
        <p className="App-intro">

          <input type="text" id="InputNumber1" value="2d6+10 Slashing + 2d6 Holy"></input>
          <button type="button" class="btn btn-danger" onclick="Main()">Roll</button>
          <span id="rollsMade"></span>
          <span id="rollResult"></span>


        </p>
      </div>
    );
  }
}

export default App;
