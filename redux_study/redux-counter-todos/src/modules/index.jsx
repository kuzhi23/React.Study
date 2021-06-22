import { combineReducers } from "redux";
import counter from "./counter";
import todos from "./todos";

const rootReducer = combineReducers({
  counter: counter,
  todos: todos,
});

export default rootReducer;
