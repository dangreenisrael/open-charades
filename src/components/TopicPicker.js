import React, {Component} from 'react';
import {DropdownButton, MenuItem} from 'react-bootstrap';

class MenuItems extends Component {
  render() {
    const {action, category, categories} = this.props;
    return (
        <DropdownButton bsSize="large" bsStyle="primary" title={category} id="CatDropdown">
          {categories.map((category, i)=>{
            const key = category + i.toString();
            const eachAction = () => action(category);
            return (
                <MenuItem key={key} eventKey={key} onClick={eachAction}>
                  {category}
                </MenuItem>
            )
          })}
      </DropdownButton>
    )
  }
}

export default MenuItems;
