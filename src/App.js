import React, { Component } from 'react';
import './App.css';

function Numbers(props) {
  return (
    <button 
	  className="numbers" 
	  onClick={props.onClick}>
      {props.value}
    </button>
  );
}

function Square(props) {
  return (
    <button 
	  className="square" 
	  onClick={props.onClick}>
      {props.value}
    </button>
  );
}
function Solution(props) {
  return (
    <button 
	  className="solution" 
	  onClick={props.onClick}>
      {props.value}
    </button>
  );
}
class App extends Component {
	render() {
		return (
		<div className="App">
		 <h1>Master Mind</h1>
		 <Game />
		</div>
		);
	}

}

class NumberButtons extends Component {
  renderSquare(i) {
    return (
		<div>
      <Numbers
        value={this.props.numbers[i]}
        onClick={() => this.props.onClick(i)}
      />	  
	  </div>
    );
  }
  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
		  {this.renderSquare(3)}
        </div>		
      </div>
	  
    );
  }
}

class Solutions extends Component {
  renderSquare(i) {
    return (
		<div>
      <Solution
        value={this.props.solutions[i]}
        onClick={() => this.props.onClick(i)}
      />	  
	  </div>
    );
  }
  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
		  {this.renderSquare(3)}
        </div>		
      </div>
	  
    );
  }
}

class Board extends Component {
  renderSquare(i) {
    return (
		<div>
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />	  
	  </div>
    );
  }
  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
		  {this.renderSquare(3)}
        </div>
        <div className="board-row">          
          {this.renderSquare(4)}
          {this.renderSquare(5)}
		  {this.renderSquare(6)}
          {this.renderSquare(7)}
        </div>
        <div className="board-row">
          {this.renderSquare(8)}
		  {this.renderSquare(9)}
          {this.renderSquare(10)}
		  {this.renderSquare(11)}
        </div>
		<div className="board-row">
          {this.renderSquare(12)}
		  {this.renderSquare(13)}
          {this.renderSquare(14)}
		  {this.renderSquare(15)}
        </div>
		<div className="board-row">
          {this.renderSquare(16)}
		  {this.renderSquare(17)}
          {this.renderSquare(18)}
		  {this.renderSquare(19)}
        </div>		
      </div>
	  
    );
  }
}
class Game extends Component {
	constructor(props) {
    super(props);
    this.state = {
      history: [{
		numbers: Array(4).fill(null),  
        squares: Array(20).fill(null),
		solutions: Array(4).fill(null)
      }],
      xIsNext: true
    };
  }
  render() {
	const history = this.state.history;
    const current = history[history.length - 1];
    return (
      <div className="game">
		<div className="game-numbers">
          <NumberButtons 
			numbers={current.numbers}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
		<div><br/></div>
        <div className="game-board">
          <Board 
			squares={current.squares}
          />
        </div>
		<div><br/></div>
		<div className="game-solution">
          <Solutions 
			solutions={current.solutions}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>/* TODO */</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
  }
export default App;


