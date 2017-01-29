import React, {Component} from 'react';
import TopicPicker from './TopicPicker';
import {setProperty} from './actionCreators';
import { connect } from 'react-redux';

class TopicChooser extends Component {
  constructor(props){
    super(props);
    this.state = {
      heading: "Category",
      categories: ['Movies', 'TV Shows', 'Books']
    };
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
  }
  handleCategoryChange (category) {
    this.props.dispatch(setProperty('category', category));
  }
  render() {
    const {heading, categories} = this.state;
    const category = this.props.category || "Choose Category";
    const handleCategoryChange = this.handleCategoryChange;
    return (
        <div>
          <h3>
            {heading}: {category}
          </h3>
          <TopicPicker category={category} categories={categories} action={handleCategoryChange}/>
        </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    category: state.category
  };
};

export default connect(mapStateToProps)(TopicChooser);