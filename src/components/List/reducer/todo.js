import { listTodo } from "../../../db/todo-list";
import { history } from "../../../db/todo-list";

function postTodo(state = listTodo, action) {
  switch (action.type) {
    case "ADD_LIST":
      state = [action.payload, ...state];
      return state;
    case "REMOVE_LIST":
      state.splice(action.payload.id, 1);
      return state;
    case "UPDATE_LIST":
      let { id, title, workDay, addTime, details, label, status } =
        action.payload;
      let newTodo = { title, workDay, addTime, details, label, status };
      state.splice(id, 1, newTodo);
      return state;
    default:
      return state;
  }
}

function History(state = history, action) {
  switch (action.type) {
    case "GET_HISTORY":
      state = [action.payload, ...state];
      return state;
    default:
      return state;
  }
}

export { postTodo, History };
