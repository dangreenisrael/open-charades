import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import {setProperty} from './actionCreators';
import wordList from './words/word-list';
import _ from 'lodash';
import {connect} from 'react-redux';

class WordGenerator extends Component {
  constructor(props) {
    super(props);
    this.updateWord = this.updateWord.bind(this);
    this.updateWord();
  }
  updateWord () {
    const category = this.props.category;
    const word = _.sample(wordList[category]);
    this.props.dispatch(setProperty('word', word));
  }
  render() {
    const updateWord = this.updateWord;
    const {word} = this.props;
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
