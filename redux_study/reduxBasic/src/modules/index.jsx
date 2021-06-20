import { combineReducers } from "redux";
import counterModule from "./counterModule";
import todosModule from "./todosModule";

const rootReducer = combineReducers({
  counter: counterModule,
  todos: todosModule,
});

export default rootReducer;
