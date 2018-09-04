import React, { Component } from 'react';
import WordContainer from './containers/WordContainer.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>E Fundamentals Code Test</h1>
        <h6>Gary Muir</h6>
        <WordContainer />
      </div>
    );
  }
}

export default App;
