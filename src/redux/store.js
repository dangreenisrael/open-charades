import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import combinedReducer from './reducers/index';

const store = createStore(combinedReducer, compose(
    applyMiddleware(thunk),
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined'
        ? window.devToolsExtension() : (f) => f
));

export default store;
