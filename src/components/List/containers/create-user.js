import { connect } from "react-redux";
import { createUser, removeUser, updateUser } from "../action/user";
import User from "../view/user/index";

const mapDispatchToProps = (dispatch) => {
  return {
    addUser(payload) {
      dispatch(createUser(payload));
    },
    updateUser(payload) {
      dispatch(updateUser(payload));
    },
    removeUser(id) {
      dispatch(removeUser(id));
    },
  };
};
export default connect(null, mapDispatchToProps)(User);
