import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
  list: [],
  isLoading: false,
};
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    add: (state, action) => {
      state.list.push(action.payload);
    },
    delete: (state, action) => {
      const index = action.payload;
      console.log(state.list.slice(0, index));
      state.list = [];
    },
    update: (state, action) => {
      state.list = action.payload;
    },
    loading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.list = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchTodos.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});
export const fetchTodos = createAsyncThunk("fetchTodos", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();
  return data;
});
