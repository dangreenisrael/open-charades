import { combineReducers } from 'redux'
import charades from './charades'
import undoable from 'redux-undo';

export default combineReducers({
  charades: undoable(charades)
})