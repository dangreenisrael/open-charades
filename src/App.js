import React, { Component } from 'react';
import './App.css';
import TopicChooser from './TopicChooser';
import WordGenerator from './WordGenerator';
class App extends Component {
  render() {
    return (
      <div className="App">
        <TopicChooser/>
        <WordGenerator/>
      </div>
    );
  }
}

export default App;
