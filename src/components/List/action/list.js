const createTodo = (title, workDay, addTime, details, label, status) => ({
  type: "ADD_LIST",
  payload: {
    title,
    workDay,
    addTime,
    details,
    label,
    status,
  },
});

const updateTodo = (id, title, workDay, addTime, details, label, status) => ({
  type: "UPDATE_LIST",
  payload: {
    id,
    title,
    workDay,
    addTime,
    details,
    label,
    status,
  },
});

const removeTodo = (id) => ({
  type: "REMOVE_LIST",
  payload: {
    id,
  },
});
const getHistory = (title, workDay, addTime, details, label, timeStop) => ({
  type: "GET_HISTORY",
  payload: {
    title,
    workDay,
    addTime,
    details,
    label,
    timeStop,
  },
});

export { createTodo, updateTodo, removeTodo, getHistory };
