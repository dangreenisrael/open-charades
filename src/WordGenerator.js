import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import {setProperty} from './actionCreators';
import wordList from './wordDictionary';
import _ from 'lodash';
import {connect} from 'react-redux';

class WordGenerator extends Component {
  constructor(props) {
    super(props);
    this.handleReduxUpdate = this.handleReduxUpdate.bind(this);
  }
  handleReduxUpdate () {
    const category = this.props.category;
    const word = _.sample(wordList[category]);
    // this.props.dispatch(setWord(word));
    this.props.dispatch(setProperty('word', word));
  }
  render() {
    const handleReduxUpdate = this.handleReduxUpdate;
    const {word} = this.props;
    return (
        <div>
          <Button bsStyle="primary" bsSize="large" onClick={handleReduxUpdate}>
            Generate Word
          </Button>
          <h3>
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
