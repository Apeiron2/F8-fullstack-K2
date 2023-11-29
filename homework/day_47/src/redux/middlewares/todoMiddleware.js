import { todoSlice } from "../slice/todoSlice";

const { updateList, updateColumn, getTask, addTask, updateTask, deleteTask } =
  todoSlice.actions;
export const swapTask = (id, column) => {
  return (dispatch) => {
    dispatch(updateColumn({ id, column }));
  };
};
export const swapColumn = (listTodo) => {
  return (dispatch) => {
    dispatch(updateList(listTodo));
  };
};
