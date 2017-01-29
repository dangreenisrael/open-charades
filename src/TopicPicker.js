import React, {Component} from 'react';
import {DropdownButton, MenuItem} from 'react-bootstrap';

class MenuItems extends Component {
  render() {
    const {action, category, categories} = this.props;
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

// export default connect(mapStateToProps)(MenuItems);
export default MenuItems;
