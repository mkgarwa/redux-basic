import counter from "./counter";
import autoComplete from "./autocomplete";
import todo from "./todo";
import { combineReducers } from 'redux';

const rootReducer = combineReducers({ counter, autoComplete, todo });

export default rootReducer;