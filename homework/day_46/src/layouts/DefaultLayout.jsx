import React from "react";
import "./DefaultLayout.scss";
import Header from "./Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
const DefaultLayout = () => {
  return (
    <div className="DefaultLayout">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
