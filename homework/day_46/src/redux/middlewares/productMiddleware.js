import { createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../../utils/clientUtils";
import { productSlice } from "../slices/productSlice";
const { addCart, deleteCart } = productSlice.actions;

export const getProducts = createAsyncThunk("getProducts", async (page) => {
  const { response, data } = await client.get(
    `/products?limit=20&page=${page}`
  );
  if (response.ok) {
    return data.data.listProduct;
  } else {
    // Get thất bại
  }
});
export const getDetail = createAsyncThunk("getDetail", async (id) => {
  const { response, data } = await client.get(`/products/${id}`);
  if (response.ok) {
    return data.data;
  } else {
    // Get thất bại
  }
});

export const addtoCart = (product, quantity) => {
  let cart = JSON.parse(localStorage.getItem("cart"));
  const { _id: productId } = product;
  const add = new Promise((resolve, reject) => {
    cart.forEach((item) => {
      if (item.productId == productId) {
        // Có ID
        item.quantity += quantity;
        resolve();
      }
    });
    // Chưa có ID
    reject();
  });
  add
    .then(() => {})
    .catch(() => {
      cart = [...cart, { productId, quantity, product }];
    })
    .finally(() => {
      localStorage.setItem("cart", JSON.stringify(cart));
    });

  return (dispatch) => {
    dispatch(addCart(cart));
  };
};
export const deleteinCart = (id) => {
  let cart = JSON.parse(localStorage.getItem("cart"));
  cart = cart.filter(({ productId }) => productId !== id);
  localStorage.setItem(
    "cart",
    cart.length ? JSON.stringify(cart) : JSON.stringify([])
  );
  return (dispatch) => {
    dispatch(deleteCart(id));
  };
};
