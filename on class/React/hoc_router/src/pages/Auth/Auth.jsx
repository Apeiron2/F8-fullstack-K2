import React from "react";
import { Outlet, useNavigate, useOutlet } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();
  const outlet = useOutlet();
  return (
    <>
      {!outlet && (
        <>
          <div>
            <h1>Auth</h1>
            <div className="flex">
              <button
                className="btn"
                onClick={() => {
                  navigate("/auth/login");
                }}
              >
                Login
              </button>
              <button
                className="btn ml-3"
                onClick={() => {
                  navigate("/auth/register");
                }}
              >
                Register
              </button>
            </div>
          </div>
        </>
      )}
      <Outlet />
    </>
  );
};

export default Auth;
