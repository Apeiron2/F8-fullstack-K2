import { fetchTodos } from "../actions/todoAction";

export const fetchTodo = () => {
  return async (dispatch) => {
    // Xử lý logic
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    // Gọi hàm dispatch
    dispatch(fetchTodos(data));
  };
};
