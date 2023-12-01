import { todoSlice } from "../slice/todoSlice";

const { updateList, updateColumn, getTask, addTask, updateTask, deleteTask } =
  todoSlice.actions;
export const swapTask = (id, column) => {
  return (dispatch) => {
    dispatch(updateColumn({ id, tasks: column.tasks }));
  };
};
export const swapColumn = (listTodo) => {
  return (dispatch) => {
    dispatch(updateList(listTodo));
  };
};
export const swapDifColumn = (
  activeColumn,
  activeTasks,
  overColumn,
  overTasks
) => {
  return (dispatch) => {
    dispatch(updateTask());
    dispatch(updateColumn({ id: activeColumn, tasks: activeTasks }));
    dispatch(updateColumn({ id: overColumn, tasks: overTasks }));
  };
};
