import { listTodo } from "../../../db/todoList";
import { combineReducers } from "redux";

function ReducerTodo(state = listTodo, action) {
  switch (action.type) {
    case "ADD_LIST":
      state = [...state, action.payload];
      return state;
    case "REMOVE_LIST":
      state.splice(action.payload.id, 1);
      return state;
    case "UPDATE_LIST":
      let { id, title, workDay, addTime, details } = action.payload;
      let newTodo = { title, workDay, addTime, details };
      state.splice(id, 1, newTodo);
      return state;
    default:
      return state;
  }
}
function ReducerSuccessTodo(state = [], action) {
  switch (action.type) {
    case "SUCCESS_LIST":
      state = [action.payload];
      return state;
    default:
      return state;
  }
}

const reduxStore = combineReducers({
  todoList: ReducerTodo,
  success: ReducerSuccessTodo,
});
export default reduxStore;
