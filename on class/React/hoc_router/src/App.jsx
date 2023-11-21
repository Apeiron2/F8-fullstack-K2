import React from "react";
import SideBar from "./components/SideBar";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Products from "./pages/Products";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Auth from "./pages/Auth/Auth";
const App = () => {
  return (
    <div className="container mx-auto grid grid-cols-5">
      <div className="col-span-1">
        <SideBar />
      </div>
      <div className="col-span-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gioi-thieu" element={<About />} />
          <Route path="/san-pham" element={<Products />} />
          <Route path="/auth" element={<Auth />}>
            <Route path="login" element={<Login />}></Route>
            <Route path="register" element={<Register />}></Route>
          </Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
