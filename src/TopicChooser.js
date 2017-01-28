import React, {Component} from 'react';
import TopicPicker from './TopicPicker';

class TopicChooser extends Component {
  constructor(props){
    super(props);
    this.state = {
      category:"Choose a thing",
      heading: "Category",
      categories: ['Foo', 'Bar']
    };
  }
  render() {
    const {category, heading, categories} = this.state;
    return (
        <div>
          <h3>
            {heading}: {category}
          </h3>
          <TopicPicker category={category} categories={categories}/>
        </div>
    );
  }

}

export default TopicChooser;
