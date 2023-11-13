import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "./Profile";
const Login = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return !isAuthenticated ? (
    <div
      className="d-flex flex-column rounded border p-3 mt-3 mx-auto"
      style={{ width: "500px" }}
    >
      <p className="text-center">Cảm ơn bạn đã sử dụng dịch vụ của F8</p>
      <p className="text-center">
        Nếu có bất kỳ câu hỏi hay trợ giúp nào, hãy đăng nhập và đặt câu hỏi tại
        đây!
      </p>
      <div className="d-flex justify-content-center align-items-center gap-3">
        <button className="btn btn-primary" onClick={loginWithRedirect}>
          Đăng nhập || Đăng ký
        </button>
      </div>
    </div>
  ) : (
    <Profile />
  );
};

export default Login;
