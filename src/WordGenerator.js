import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import {setProperty, generateWord} from './actionCreators';
import wordDictionary from './words/word-list';
import _ from 'lodash';
import {connect} from 'react-redux';

class WordGenerator extends Component {
  constructor(props) {
    super(props);
    this.props.dispatch(setProperty('wordDictionary', wordDictionary));
    this.updateWord = this.updateWord.bind(this);
    this.updateWord();
  }
  updateWord () {
    const category = this.props.category;
    const word = _.sample(wordDictionary[category]);
    this.props.dispatch(setProperty('word', word));
    this.props.dispatch(generateWord(category));
  }
  render() {
    const updateWord = this.updateWord;
    const word = this.props.word || "No More Words";
    return (
        <div>
          <Button bsStyle="primary" bsSize="large" onClick={updateWord}>
            Generate Word
          </Button>
          <h3 className="word">
            {word}
          </h3>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    category: state.category,
    word: state.word
  };
};

export default connect(mapStateToProps)(WordGenerator);
