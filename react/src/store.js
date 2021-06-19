import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import mainReducer from './reducer';

const initialstate = {};
const middleware = [thunk];

export default createStore(
  mainReducer,
  initialstate,
  compose(
    applyMiddleware(...middleware),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ),
);
