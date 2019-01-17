import {combineReducers} from "redux";
import TextReducer from "./TextReducer";
import CounterReducer from "./CounterReducer";
export default combineReducers({
  CounterReducer,
  TextReducer
})