import React from "react";
import { Navigate, Route } from "react-router-dom";
import Products from "../pages/Products/Products";
import DefaultLayout from "../layouts/DefaultLayout";
import Login from "../pages/Auth/Login/Login";
import ProductDetail from "../pages/ProductDetail/ProductDetail";
import AuthMiddleware from "../middlewares/AuthMiddleware";
import Cart from "../pages/Cart/Cart";

const PublicRoutes = (
  <>
    <Route element={<DefaultLayout />}>
      <Route element={<AuthMiddleware />}>
        <Route path="/" element={<Navigate to="/products" />} />
        <Route path="/products" element={<Products />} />
        <Route path="/productDetail/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
    </Route>

    <Route path="/login" element={<Login />} />
  </>
);
export default PublicRoutes;
