import React, { useState } from "react";
import Logo from "./assets/img/todo.svg";
import { client } from "./helper/client";
import { Cookie } from "./helper/cookie";
export default function Login({ handleLogin }) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setLoading] = useState(false);
  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    setLoading(true);
    const { response, data } = await client.get(`/api-key?email=${email}`);
    setLoading(false);
    if (response.ok) {
      // Đăng nhập thành công
      setEmail("");
      Cookie.set("Email", email, 5 * 60 * 1000);
      Cookie.set("apiKey", data.data.apiKey, 60 * 1000);
      client.setApiKey(data.data.apiKey);
    }
    setMessage(data.message);
    handleLogin(response);
  };
  return (
    <form className="login" onSubmit={handleSubmit}>
      <div className="logo">
        <img src={Logo} alt="logo" />
        <h1>TODO</h1>
      </div>
      <div className="form-outline mb-4">
        <label className="form-label" htmlFor="form2Example1">
          Email address
        </label>
        <input
          type="email"
          id="form2Example1"
          className="form-control"
          value={email}
          onChange={handleChange}
        />
      </div>
      <p className="message">{message}</p>
      <button
        type="submit"
        className="btn btn-primary btn-block mb-4"
        disabled={isLoading}
      >
        {isLoading ? "Loading..." : "Sign in"}
      </button>
      <div className="text-center">
        <p>
          Not a member? <a href="#!">Register</a>
        </p>
        <p>or sign up with:</p>
        <button type="button" className="btn btn-link btn-floating mx-1">
          <i className="fab fa-facebook-f"></i>
        </button>
        <button type="button" className="btn btn-link btn-floating mx-1">
          <i className="fab fa-google"></i>
        </button>
        <button type="button" className="btn btn-link btn-floating mx-1">
          <i className="fab fa-twitter"></i>
        </button>
        <button type="button" className="btn btn-link btn-floating mx-1">
          <i className="fab fa-github"></i>
        </button>
      </div>
    </form>
  );
}
