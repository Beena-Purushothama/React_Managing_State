import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './Game.js';
import ScoreCard from './ScoreCard.js';

class App extends Component {
  state = {
	 numQuestions : 0,
	 numCorrect : 0
  }

  setResult = answer => {
    if(answer===true){
      this.setState(prevState => ({
        numCorrect : ++prevState.numCorrect,
      }));  		
    }
	this.setState(prevState => ({
      numQuestions : ++prevState.numQuestions,
    }));
  }

  render() {
    const {numQuestions,numCorrect} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
		<Game setResult={this.setResult}/>
		<ScoreCard numQuestions={this.state.numQuestions} numCorrect={this.state.numCorrect}/>
      </div>
    );
  }
}

export default App;
