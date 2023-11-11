import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductList from "./ProductList";
import Cart from "./Cart";
import { useDispatch, useSelector } from "../../core/hook";
import { client } from "../../helper/client";
import { refreshApiKey } from "../../helper/apiKey";
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
  useEffect(() => {
    if (email) {
      const action = async () => {
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
      action();
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
