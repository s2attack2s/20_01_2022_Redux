import { connect } from "react-redux";
import {
  createTodo,
  updateTodo,
  removeTodo,
  successTodo,
} from "../action/actionList";
import List from "../view/list/list";

const mapDispatchToProps = (dispatch) => {
  return {
    addList(payload) {
      dispatch(createTodo(payload));
    },
    updateList(payload) {
      dispatch(updateTodo(payload));
    },
    removeList(id) {
      dispatch(removeTodo(id));
    },

    successList(payload) {
      dispatch(successTodo(payload));
    },
  };
};
export default connect(null, mapDispatchToProps)(List);
