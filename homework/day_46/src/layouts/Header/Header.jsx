import React, { useMemo, useState } from "react";
import "./Header.scss";
import logo from "/cat.jpg";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const { name } = useSelector((state) => state.user);
  const cart = useSelector((state) => state.product.cart);
  const handleCartInner = () => {
    return cart?.reduce((prev, current) => {
      return prev + current.quantity;
    }, 0);
  };
  const cartInner = useMemo(handleCartInner, [cart]);

  return (
    <header className="Header">
      <div className="Header-left">
        <img
          src={logo}
          alt="logo"
          onClick={() => {
            navigate("/");
          }}
        />
      </div>
      <div className="Header-right">
        <div className="profile">
          <img src={logo} alt="logo" />
          <h3>{name ? name : "User"}</h3>
        </div>
        <div className="cart">
          <i
            className="fa-solid fa-cart-shopping"
            onClick={() => {
              navigate("/cart");
            }}
          ></i>
          <span>{cartInner}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
