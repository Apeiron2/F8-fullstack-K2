import React, { useState } from "react";
import logo from "/cat.jpg";
import "./Login.scss";
import { Navigate } from "react-router-dom";
import { login } from "../../../services/userServices";
import { useDispatch, useSelector } from "react-redux";
import { userSlice } from "../../../redux/slices/userSlice";
const { login: loginWith } = userSlice.actions;
const Login = () => {
  const { isLogin } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [mess, setMess] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    if (!email) {
      setMess("Chưa điền email!");
    } else {
      setMess("Đang đăng nhập...");
      login(email)
        .then(({ response, data }) => {
          if (!response.ok) {
            setMess(data);
          } else {
            localStorage.setItem("name", data);
            dispatch(loginWith(data));
          }
        })
        .catch((err) => {
          setMess(err);
        });
    }
  };
  return isLogin ? (
    <Navigate to="/products" />
  ) : (
    <div className="Login">
      <img src={logo} alt="logo" />
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Đăng nhập</label>
        <input id="email" type="email" placeholder="Email..." />
        {mess && <p>{mess}</p>}
      </form>
    </div>
  );
};

export default Login;
