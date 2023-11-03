import React, { useState } from "react";

const Login = () => {
  const [form, setForm] = useState({
    name: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    setForm({ name: "", password: "" });
  };
  const hanleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={hanleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={hanleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
