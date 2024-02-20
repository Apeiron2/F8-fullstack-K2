"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { object, string } from "yup";
import instance from "@/utils/axios";

const Login = () => {
  const router = useRouter();
  const [errors, setErrors] = useState({});
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    let userSchema = object({
      email: string().required("Email cannot be blank").email("Invalid email"),
      password: string()
        .required("Password cannot be blank")
        .min(6, "Passwords must be at least 6 characters"),
    });
    try {
      const body = await userSchema.validate(
        { email, password },
        { abortEarly: false }
      );
      setErrors({});
      instance
        .post("/auth/login", body)
        .then((res) => {
          if (res.status == 200) {
            localStorage.setItem("login-token", JSON.stringify(res.data.data));
            router.push("/");
          }
        })
        .catch((err) => {
          if (err.response.data.status == 400) {
            setErrors({ fail: "Email or password is incorrect" });
          } else {
            setErrors({ fail: "An error has occurred! Try again" });
          }
        });
    } catch (error) {
      const errors = Object.fromEntries(
        error.inner.map((item) => [item.path, item.message])
      );
      setErrors(errors);
    }
  };
  return (
    <div className="d-flex justify-content-center align-items-center">
      <form
        className="w-25 border border-2 rounded-3 p-3"
        onSubmit={handleSubmit}
      >
        <h1 className="text-center text-primary mb-4">LOGIN</h1>
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="form2Example1">
            Email address
          </label>
          <input
            type="text"
            id="form2Example1"
            className="form-control"
            name="email"
          />
          {errors.email && <p className="text-danger p-1">{errors.email}</p>}
        </div>

        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="form2Example2">
            Password
          </label>
          <input
            type="password"
            id="form2Example2"
            className="form-control"
            name="password"
          />
          {errors.password && (
            <p className="text-danger p-1">{errors.password}</p>
          )}
        </div>
        {errors.fail && <p className="text-danger p-1">{errors.fail}</p>}
        <div className="row mb-4">
          <div className="col d-flex justify-content-center">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="form2Example31"
                defaultChecked
              />
              <label className="form-check-label" htmlFor="form2Example31">
                {" "}
                Remember me{" "}
              </label>
            </div>
          </div>

          <div className="col">
            <a href="#!">Forgot password?</a>
          </div>
        </div>

        <button className="btn btn-primary btn-block mb-4">Sign in</button>

        <div className="text-center">
          <p>
            Not a member? <Link href="/register">Register</Link>
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
    </div>
  );
};

export default Login;
