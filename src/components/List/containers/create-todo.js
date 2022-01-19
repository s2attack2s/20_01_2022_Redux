import { connect } from "react-redux";
import { createTodo, updateTodo, removeTodo, getHistory } from "../action/list";
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
    getHistory(id) {
      dispatch(getHistory(id));
    },
  };
};
export default connect(null, mapDispatchToProps)(List);
