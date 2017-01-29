import { SET_PROPERTY } from './actions';

const DEFAULT_STATE = {
  category: 'Movies',
  word: ''
};

const setProperty = (state, action) => {
  const {propertyName, propertyValue} = action;
  let tempObject = {};
  tempObject[propertyName] = propertyValue;
  return Object.assign({}, state, tempObject);
};

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_PROPERTY:
      return setProperty(state, action);
    default:
      return state;
  }
};

export default rootReducer;
