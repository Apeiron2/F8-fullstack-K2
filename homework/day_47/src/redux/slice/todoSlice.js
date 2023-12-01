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
      const { id, tasks } = action.payload;
      state.listTodo[id].tasks = tasks;
    },
    deleteColumn: (state, action) => {},
    getTask: () => {},
    addTask: (state, action) => {},
    updateTask: (state, action) => {
      const { column, index, task } = action.payload;
      state.listTodo[column].tasks[index] = task;
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
  const {
    data: { columns, tasks: _tasks },
  } = await getTodos();
  const listTodo = columns.map((column) => {
    const tasks = _tasks.filter((task) => task.column === column.column);
    return {
      column,
      tasks,
    };
  });
  return listTodo;
});
