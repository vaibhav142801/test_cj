import { createStore, applyMiddleware, compose  } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import rootReducer from "./reducer/index";


const initialState = {}
const middleware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeWithDevTools(
  applyMiddleware(...middleware)
));


export default store