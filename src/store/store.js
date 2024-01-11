import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";
import examReducer from "./Exam/reducers/examReducer.js";
const reducer = combineReducers({
  examReducer: examReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
