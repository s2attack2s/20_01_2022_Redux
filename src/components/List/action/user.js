const createUser = (label, createdAt) => ({
  type: "ADD_USER",
  payload: {
    label,
    createdAt,
  },
});

const updateUser = (id, label, createdAt) => ({
  type: "UPDATE_USER",
  payload: {
    id,
    label,
    createdAt,
  },
});

const removeUser = (id) => ({
  type: "REMOVE_USER",
  payload: {
    id,
  },
});

export { createUser, updateUser, removeUser };
