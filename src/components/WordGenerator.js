import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import { generateWord} from '../redux/actionCreators';
import {connect} from 'react-redux';

class WordGenerator extends Component {
  constructor(props) {
    super(props);
    this.updateWord = this.updateWord.bind(this);
  }
  updateWord () {
    const category = this.props.category;
    this.props.dispatch(generateWord(category));
  }
  render() {
    const updateWord = this.updateWord;
    const word = this.props.word;
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
  return state.charades.present;
};

export default connect(mapStateToProps)(WordGenerator);
