import React, {Component} from 'react';
import {Button, ButtonGroup} from 'react-bootstrap';
import {connect} from 'react-redux';
import { ActionCreators } from 'redux-undo';

class BackButton extends Component {
  constructor(props) {
    super(props);
    this.undo = this.undo.bind(this);
    this.redo = this.redo.bind(this);
  }
  undo () {
   this.props.dispatch(ActionCreators.undo());
  }
  redo () {
    this.props.dispatch(ActionCreators.redo());
  }
  render() {
    const {undo, redo} = this;
    const noUndo = this.props.past.length === 0;
    const noRedo = this.props.future.length === 0;
    return (
    <ButtonGroup>
      <Button bsSize="large" onClick={undo} disabled={noUndo}>
        Undo
      </Button>
      <Button bsSize="large" onClick={redo} disabled={noRedo}>
        Redo
      </Button>
    </ButtonGroup>

    );
  }

}


const mapStateToProps = (state) => {
  return state.charades;
};

export default connect(mapStateToProps)(BackButton);
