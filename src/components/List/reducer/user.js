import listUser from "../../../db/user-list";

function postUser(state = listUser, action) {
  switch (action.type) {
    case "ADD_USER":
      state = [action.payload, ...state];
      return state;
    case "REMOVE_USER":
      state.splice(action.payload.id, 1);
      return state;
    case "UPDATE_USER":
      let { id, label, createdAt } = action.payload;
      let newUser = { label, createdAt };
      state.splice(id, 1, newUser);
      return state;
    default:
      return state;
  }
}

export default postUser;
