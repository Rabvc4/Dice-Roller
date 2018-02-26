import React, { Component } from 'react';
import NavBar from './NavBar';
import Game from './Game';
import InputBox from './InputBox';
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

          <Game></Game>
          <InputBox></InputBox>

        </p>
      </div>
    );
  }
}

export default App;
