import React from 'react';
import './Game.css';

const xCoordinate = 10
const yCoordinate = 10

class Square extends React.Component {
  render() {
    return (
      <button className="square" onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(xCoordinate*yCoordinate).fill(null),
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = i;
    /* squares[i] = 'X';*/
    this.setState({squares: squares});
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  boardRow(NewCoord, xCoord) {
    var Start = NewCoord - xCoord;
    var lis = [];
    for (Start; Start<NewCoord; Start++) {
      lis.push(this.renderSquare(Start));
    }
    return (
      <div className="board-row">
        {lis}
      </div>
    );
  }

  Grid(xCoord, yCoord) {
    var NewCoord = xCoord;
    var lis = [];
    for (var i=0; i<yCoord; i++) {
      lis.push(this.boardRow(NewCoord, xCoord));
      NewCoord += xCoord;
    }
    return (
      <div className="game-board">
        {lis}
      </div>
    );
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        {this.Grid(xCoordinate,yCoordinate)}

        <div className="status">{status}</div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

export default Game;
