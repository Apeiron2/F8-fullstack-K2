import { createSlice } from "@reduxjs/toolkit";
import { Cookie } from "../../utils/cookieUtils";
const initialState = {
  isLogin: Cookie.get("email"),
  name: localStorage.getItem("name"),
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      (state.name = action.payload), (state.isLogin = true);
    },
    logout: (state, action) => {
      (state.name = ""), (state.isLogin = false);
    },
  },
});
