import { configureStore } from "@reduxjs/toolkit";
import { elementSlice } from "./slices/elementSlice";
export const store = configureStore({
  reducer: {
    element: elementSlice.reducer,
  },
});
