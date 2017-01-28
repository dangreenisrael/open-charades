import { SET_CATEGORY } from './actions';

const DEFAULT_STATE = {
  category: '',
};

const setCategory = (state, action) => {
  return Object.assign({}, state, {category: action.category});
};

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_CATEGORY:
      return setCategory(state, action);
    default:
      return state;
  }
};

export default rootReducer;
