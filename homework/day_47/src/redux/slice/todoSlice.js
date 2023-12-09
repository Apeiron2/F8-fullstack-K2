import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getTodos } from "../../services/todoService";
const initialState = {
  listTodo: [],

  status: "idle",
};
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    updateList: (state, action) => {
      state.listTodo = action.payload;
    },

    getColumn: () => {},
    addColumn: (state, action) => {},
    updateColumn: (state, action) => {
      const { index, tasks } = action.payload;
      state.listTodo[index].tasks = tasks;
    },
    deleteColumn: (state, action) => {},
    getTask: () => {},
    addTask: (state, action) => {},
    updateTask: (state, action) => {
      const { indexColumn, indexTask, task } = action.payload;
      state.listTodo[indexColumn].tasks[indexTask] = task;
    },
    deleteTask: (state, action) => {},
  },
  extraReducers: (builer) => {
    builer.addCase(reorganizeTodos.pending, (state) => {
      state.status = "pending";
    });
    builer.addCase(reorganizeTodos.fulfilled, (state, action) => {
      state.listTodo = action.payload;
      state.status = "fulfilled";
    });
    builer.addCase(reorganizeTodos.rejected, (state) => {
      state.status = "rejected";
    });
  },
});

// Async Thunk

// Xử lý lại dữ liệu
export const reorganizeTodos = createAsyncThunk("reorganizeTodos", async () => {
  const { data } = await getTodos();
  const { columns, tasks: _tasks } = data.data;
  const listTodo = columns.map((column, index) => {
    let taskIndex = -1;
    let tasks = [];
    _tasks.forEach((task) => {
      if (task.column === column.column) {
        taskIndex = ++taskIndex;
        // tasks.push({ ...task, taskIndex, columnIndex: index });
        tasks.push({ ...task });
      }
    });
    return {
      // column: { ...column, index },
      column,
      tasks,
    };
  });
  return listTodo;
});
