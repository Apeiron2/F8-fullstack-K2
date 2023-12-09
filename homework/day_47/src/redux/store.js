import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "./slice/todoSlice";
import { userSlice } from "./slice/userSlice";

export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
    user: userSlice.reducer,
  },
});
