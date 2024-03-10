"use client";
import Link from "next/link";
import React, { useState } from "react";
import { object, string } from "yup";

const Register = () => {
  const [errors, setErrors] = useState({});
  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const rePassword = e.target[3].value;
    let userSchema = object({
      username: string().required("Username cannot be blank"),
      email: string().required("Email cannot be blank").email("Invalid email"),
      password: string()
        .required("Password cannot be blank")
        .min(6, "Passwords must be at least 6 characters"),
    });
    try {
      const body = await userSchema.validate(
        { username, email, password },
        { abortEarly: false }
      );
      if (rePassword !== password) {
        setErrors({ rePassword: "Password does not match" });
      } else {
        setErrors({});
        console.log(body);
      }
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
        className="w-50 border border-2 rounded-5 p-5"
        onSubmit={handleSubmit}
      >
        <h1 className="text-center text-primary mb-4">REGISTER</h1>
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="form3Example1">
            User Name
          </label>
          <input type="text" id="form3Example1" className="form-control" />
          {errors.username && (
            <p className="text-danger p-1">{errors.username}</p>
          )}
        </div>

        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="form3Example2">
            Email address
          </label>
          <input type="email" id="form3Example2" className="form-control" />
          {errors.email && <p className="text-danger p-1">{errors.email}</p>}
        </div>

        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="form3Example3">
            Password
          </label>
          <input type="password" id="form3Example3" className="form-control" />
          {errors.password && (
            <p className="text-danger p-1">{errors.password}</p>
          )}
        </div>

        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="form3Example4">
            Confirm Password
          </label>
          <input type="password" id="form3Example4" className="form-control" />
          {errors.rePassword && (
            <p className="text-danger p-1">{errors.rePassword}</p>
          )}
        </div>

        <button className="btn btn-primary btn-block mb-4">Register</button>

        <div className="text-center">
          <p>
            Already a member? <Link href="/login">Login</Link>
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

export default Register;
