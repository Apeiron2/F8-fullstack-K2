import React from "react";
import { Routes } from "react-router-dom";
import PublicRoutes from "../routes/publicRoutes";

const Layout = () => {
  return (
    <>
      <Routes>{PublicRoutes}</Routes>
    </>
  );
};

export default Layout;
