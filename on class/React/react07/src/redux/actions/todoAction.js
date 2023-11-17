export const fetchTodos = (todos = []) => {
  return {
    type: "todos/fetch",
    payload: todos,
  };
};
