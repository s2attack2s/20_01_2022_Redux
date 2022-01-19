const createTodo = (title, workDay, addTime, details) => ({
  type: "ADD_LIST",
  payload: {
    title,
    workDay,
    addTime,
    details,
  },
});

const updateTodo = (id, title, workDay, addTime, details) => ({
  type: "UPDATE_LIST",
  payload: {
    id,
    title,
    workDay,
    addTime,
    details,
  },
});

const removeTodo = (id) => ({
  type: "REMOVE_LIST",
  payload: {
    id,
  },
});

const successTodo = (id, status) => ({
  type: "SUCCESS_LIST",
  payload: {
    id,
    status,
  },
});

export { createTodo, updateTodo, removeTodo, successTodo };
