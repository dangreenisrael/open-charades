import React, {Component} from 'react';
import './App.css';
import BackButton from './components/NavigationButtons';
import TopicChooser from './components/TopicChooser';
import WordGenerator from './components/WordGenerator';
import {Jumbotron} from 'react-bootstrap';

class App extends Component {
  render() {
    return (
        <div className="App">
          <Jumbotron>
            <h1>Open Charades</h1>
            <p>This is an open source charades word generator</p>
            <div className="spaced">
              <BackButton/>
            </div>
            <div className="spaced">
              <TopicChooser/>
            </div>
            <div className="spaced">
              <WordGenerator/>
            </div>
          </Jumbotron>
        </div>
    );
  }
}

export default App;
