import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const AuthMiddleware = () => {
  const { isLogin } = useSelector((state) => state.user);
  return isLogin ? <Outlet /> : <Navigate to="/login" />;
};

export default AuthMiddleware;
