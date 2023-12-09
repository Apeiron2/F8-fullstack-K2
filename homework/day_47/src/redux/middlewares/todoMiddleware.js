import { todoSlice } from "../slice/todoSlice";

const { updateList, updateColumn, getTask, addTask, updateTask, deleteTask } =
  todoSlice.actions;
export const swapTask = (index, column) => {
  return (dispatch) => {
    dispatch(updateColumn({ index, tasks: column.tasks }));
  };
};
export const swapColumn = (listTodo) => {
  return (dispatch) => {
    dispatch(updateList(listTodo));
  };
};
export const swapDifColumn = (active, over, newActiveTasks, newOverTasks) => {
  const { columnIndex: activeColumnIndex, taskIndex: activeTaskIndex } =
    active.data.current;
  const { columnIndex: overColumnIndex, taskIndex: overTaskIndex } =
    over.data.current;

  return (dispatch) => {
    dispatch(
      updateTask({
        indexColumn: activeColumnIndex,
        indexTask: activeTaskIndex,
        task: over.data.current,
      })
    );
    dispatch(
      updateTask({
        indexColumn: overColumnIndex,
        indexTask: overTaskIndex,
        task: active.data.current,
      })
    );
    dispatch(updateColumn({ index: activeColumnIndex, tasks: newActiveTasks }));
    dispatch(updateColumn({ index: overColumnIndex, tasks: newOverTasks }));
  };
};
