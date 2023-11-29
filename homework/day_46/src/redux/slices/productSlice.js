import { createSlice } from "@reduxjs/toolkit";
import {
  getDetail,
  getProducts,
  orderCart,
} from "../middlewares/productMiddleware";
const initialState = {
  products: [],
  detail: {},
  cart: JSON.parse(localStorage.getItem("cart")),
  status: "idle",
};
export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addCart: (state, action) => {
      state.cart = action.payload;
    },
    deleteCart: (state, action) => {
      state.cart = state.cart.filter(
        ({ productId }) => productId !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.status = "fulfilled";
    });
    builder.addCase(getProducts.rejected, (state) => {
      state.status = "rejected";
    });
    builder.addCase(getDetail.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(getDetail.fulfilled, (state, action) => {
      state.detail = action.payload;
      state.status = "fulfilled";
    });
    builder.addCase(getDetail.rejected, (state) => {
      state.status = "rejected";
    });
    builder.addCase(orderCart.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(orderCart.fulfilled, (state) => {
      state.status = "fulfilled";
      state.cart = [];
    });
    builder.addCase(orderCart.rejected, (state) => {
      state.status = "rejected";
    });
  },
});
