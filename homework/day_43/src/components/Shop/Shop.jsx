import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductList from "./ProductList";
import Cart from "./Cart";
import { useDispatch, useSelector } from "../../core/hook";
import { client } from "../../helper/client";
import { refreshApiKey } from "../../helper/apiKey";
import { Cookie } from "../../helper/cookie";
const Shop = () => {
  const { email } = useSelector();
  const dispatch = useDispatch();
  const getProducts = async (limit = null) => {
    const url = limit ? `/products?limit=${limit}` : `/products`;
    const { response, data } = await client.get(url);
    if (response.ok) {
      // Get products success
    } else {
      // Get products fail
    }
    return { response, data };
  };
  const action = async () => {
    client.setApiKey(Cookie.get("apiKey"));
    const { response, data } = await getProducts(10);
    if (response.ok) {
      // Get Products success
      dispatch({
        type: "get-products",
        payload: data.data,
      });
    } else {
      if (data.code === 401) {
        const { response } = refreshApiKey();
        if (response.ok) {
          const { response, data } = await getProducts(10);
          if (response.ok) {
            // Get Products success
            dispatch({
              type: "get-products",
              payload: data.data,
            });
          } else {
            dispatch({
              type: "login",
              payload: false,
            });
          }
        }
      } else
        dispatch({
          type: "login",
          payload: false,
        });
    }
  };
  useEffect(() => {
    if (email) {
      action();
      const newCart = localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : [];
      dispatch({
        type: "cart/update",
        payload: newCart,
      });
    } else {
      dispatch({
        type: "login",
        payload: false,
      });
    }
  }, []);
  return (
    <div className="shop container bg-secondary bg-gradient p-5 mt-5 rounded-3">
      <div className="row text-center p-3">
        <h1 className="text-white">Welcome to my shop !</h1>
      </div>
      <ProductList />
      <Cart />
    </div>
  );
};

export default Shop;
