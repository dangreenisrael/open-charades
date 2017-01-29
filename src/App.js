import React, { Component } from 'react';
import './App.css';
import TopicChooser from './TopicChooser';
import WordGenerator from './WordGenerator';
import {Jumbotron, Button } from 'react-bootstrap';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Jumbotron>
          <h1>Open Charades</h1>
          <p>This is an open source charades word generator</p>
          <TopicChooser/>
          <br/>
          <WordGenerator/>
        </Jumbotron>
      </div>
    );
  }
}

export default App;
