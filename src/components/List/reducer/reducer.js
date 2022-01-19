import { combineReducers } from "redux";
import ReducerTodo from "./reducerTodo";
const reduxStore = combineReducers({
  todoList: ReducerTodo,
});
export default reduxStore;
