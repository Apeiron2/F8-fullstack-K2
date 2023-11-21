import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  count: 0,
};
export const counterSlide = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      // Tự động tạo ra type từ name -> counter/increment
      state.count = state.count + action.payload;
    },
    decrement: (state, action) => {
      state.count = state.count - action.payload;
    },
  },
});
