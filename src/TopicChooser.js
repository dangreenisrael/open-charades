import React, {Component} from 'react';
import TopicPicker from './TopicPicker';
import {setProperty} from './actionCreators';
import { connect } from 'react-redux';
import wordList from './words/word-list';

class TopicChooser extends Component {
  constructor(props){
    super(props);
    const categories = Object.keys(wordList);
    this.state = {
      heading: "Category",
      categories: categories
    };
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleCategoryChange(categories[0]);
  }
  handleCategoryChange (category) {
    this.props.dispatch(setProperty('category', category));
  }
  render() {
    const {categories} = this.state;
    const category = this.props.category;
    const handleCategoryChange = this.handleCategoryChange;
    return (
        <div>
          <TopicPicker
            category={category}
            categories={categories}
            action={handleCategoryChange}/>
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