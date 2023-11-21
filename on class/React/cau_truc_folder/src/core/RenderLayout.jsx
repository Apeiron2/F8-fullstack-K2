import React from "react";
import { Route, Routes } from "react-router-dom";
import { publicRoutes } from "../routes/publicRoutes";
const RenderLayout = () => {
  const Layout = publicRoutes.layout;
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {publicRoutes.routes.map(({ path, element }, index) => {
          const Component = element;
          return <Route key={index} path={path} element={<Component />} />;
        })}
      </Route>
    </Routes>
  );
};

export default RenderLayout;
