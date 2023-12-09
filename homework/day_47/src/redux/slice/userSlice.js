import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { login } from "../../services/userService";
import { Cookie } from "../../utils/cookieUtils";

const initialState = {
  isLogin: Cookie.get("email") ? true : false,
  profile: {},
  status: "idle",
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.isLogin = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userLogin.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(userLogin.fulfilled, (state) => {
      state.status = "fulfilled";
      state.isLogin = true;
    });
    builder.addCase(userLogin.rejected, (state) => {
      state.status = "rejected";
      state.isLogin = false;
      state.profile = {};
    });
  },
});
export const userLogin = createAsyncThunk("user/login", async (email) => {
  const { response, data } = await login(email);
  return data;
});
