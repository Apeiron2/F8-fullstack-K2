import { configureStore } from "@reduxjs/toolkit";
import { nodeSlice } from "./slices/nodeSlice";
export const store = configureStore({
  reducer: {
    node: nodeSlice.reducer,
  },
});
