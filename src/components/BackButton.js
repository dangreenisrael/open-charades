import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import { ActionCreators } from 'redux-undo';

class BackButton extends Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }
  goBack () {
   this.props.dispatch(ActionCreators.undo());
  }
  render() {
    const {goBack} = this;
    return (
        <Button bsStyle="primary" bsSize="large" onClick={goBack}>
          Back
        </Button>
    );
  }

}


const mapStateToProps = (state) => {
  return {
    category: state.category
  };
};

export default connect(mapStateToProps)(BackButton);
