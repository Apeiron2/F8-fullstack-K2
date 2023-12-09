import React from "react";
import "./Login.scss";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../redux/slice/userSlice";
const Login = () => {
  const { status } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userLogin(e.target[0].value));
  };
  return (
    <div className="Login">
      <h1>Đăng nhập</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nhập Email"
          disabled={status == "pending" ? true : false}
        />
      </form>
      {status == "idle" ? (
        ""
      ) : (
        <p>
          {status == "pending"
            ? "Đang đăng nhập"
            : status == "rejected"
            ? "Đăng nhập thất bại"
            : "Đăng nhập thành công"}
        </p>
      )}
    </div>
  );
};

export default Login;
