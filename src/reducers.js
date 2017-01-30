import { SET_PROPERTY, GENERATE_WORD } from './actions';
import _ from 'lodash';
import wordDictionary from './words/word-list';

const DEFAULT_STATE = {
  category: 'Easy',
  word: ''
};

const setProperty = (state, action) => {
  const {propertyName, propertyValue} = action;
  let tempObject = {};
  tempObject[propertyName] = propertyValue;
  return Object.assign({}, state, tempObject);
};

const generateWord = (state, action) =>{
  let dictionary = state.wordDictionary;
  const {category} = action;
  const word = _.sample(wordDictionary[category]);
  _.remove(dictionary[category], (n)=> {
    return n === word;
  });
  return Object.assign({}, state, {word: word});
};


const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_PROPERTY:
      return setProperty(state, action);
    case GENERATE_WORD:
      return generateWord(state, action);
    default:
      return state;
  }
};

export default rootReducer;
