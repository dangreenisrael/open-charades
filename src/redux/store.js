
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import broadCastAction from './middleware/broadcast-action';
import combinedReducer from './reducers/index';

const store = createStore(combinedReducer, compose(
    applyMiddleware(thunk, broadCastAction),
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined'
        ? window.devToolsExtension() : (f) => f
));

export default store;