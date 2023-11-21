import { configureStore } from "@reduxjs/toolkit";
import { counterSlide } from "./slices/counterSlice";
import { todoSlice } from "./slices/todoSlice";
export const store = configureStore({
  reducer: {
    counter: counterSlide.reducer,
    todo: todoSlice.reducer,
  },
});
