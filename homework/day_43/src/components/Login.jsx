import React, { useEffect, useState } from "react";
import login from "../assets/login-background.jpg";
import { useSelector, useDispatch } from "../core/hook";
import { client } from "../helper/client";
import { Cookie } from "../helper/cookie";
const Login = () => {
  const { cart } = useSelector();
  const dispatch = useDispatch();
  const [submit, onsubmit] = useState(false);
  const [messange, setMessage] = useState("");

  // Function
  const handleSubmit = async (e) => {
    e.preventDefault();
    onsubmit(true);
    const email = e.target[0].value;
    const { response, data } = await client.get(`/api-key?email=${email}`);
    if (response.ok) {
      // Đăng nhập thành công
      dispatch({
        type: "loading",
        payload: true,
      });
      // Xử lý gì đó ở đây
      Cookie.set("email", email, 5 * 60 * 1000);
      Cookie.set("apiKey", data.data.apiKey, 5 * 60000);
      client.setApiKey(data.data.apiKey);
      //
      dispatch({
        type: "loading",
        payload: false,
      });
      dispatch({
        type: "login",
        payload: email,
      });
    } else {
      // Đăng nhập thất bại
      dispatch({
        type: "login",
        payload: false,
      });
    }
    setMessage(data.message);
    onsubmit(false);
  };
  useEffect(() => {
    localStorage.clear();
  });
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <div className="d-flex flex-column justify-content-center vh-100">
            <h1 className="p-3">Shopping now!</h1>
            <form onSubmit={handleSubmit} className="p-3 w-100">
              <label className="form-label fw-bold">Email</label>
              <input
                type="text"
                placeholder="Đăng nhập bằng Email ..."
                className="form-control p-2 border-4"
              />
              <p className="text-danger pt-3 pl-3">{messange}</p>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={submit}
              >
                {submit ? "Loading..." : "Đăng nhập"}
              </button>
            </form>
          </div>
        </div>
        <div className="col-8">
          <img
            src={login}
            alt="login"
            className="d-flex vh-100"
            style={{ transform: "scaleX(-1)" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
