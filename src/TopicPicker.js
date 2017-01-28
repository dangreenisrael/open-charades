import React, {Component} from 'react';
import {DropdownButton, MenuItem} from 'react-bootstrap';
import { setCategory } from './actionCreators';
import { connect } from 'react-redux';

class MenuItems extends Component {
  constructor(props){
    super(props);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
  }
  handleCategoryChange (thing) {
    this.props.dispatch(setCategory(thing));
  }
  render() {
    const {categories} = this.props;
    const category = this.props.category || "Choose Category";
    const action = this.handleCategoryChange;
    return (
        <DropdownButton bsStyle="primary" title={category} id="1234">
          {categories.map((category, i)=>{
            const key = category + i.toString();
            const eachAction = () => action(category);
            return (<MenuItem key={key} eventKey={key} onClick={eachAction}>
                  {category}
                  </MenuItem>
            )
          })}
      </DropdownButton>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    category: state.category
  };
};

export default connect(mapStateToProps)(MenuItems);
