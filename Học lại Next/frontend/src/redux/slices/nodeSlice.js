import { createSlice } from "@reduxjs/toolkit";
const initialState = {};
export const nodeSlice = createSlice({
  name: "node",
  initialState,
  reducers: {
    add: (state, action) => {
      state = action.payload;
    },
  },
});
