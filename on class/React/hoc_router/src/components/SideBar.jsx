import React from "react";
import { Link, NavLink } from "react-router-dom";

const SideBar = () => {
  const activeMenu = (props) => {
    return props.isActive ? "link active" : "link";
  };
  return (
    <div className="w-full h-screen p-5 bg-cyan-200">
      <h1 className="text-xl font-bold">SideBar</h1>
      <ul className="p-3 flex flex-col gap-5">
        <li>
          <NavLink to="/" className={activeMenu}>
            Trang chủ
          </NavLink>
        </li>
        <li>
          <NavLink to="/gioi-thieu" className={activeMenu}>
            Giới thiệu
          </NavLink>
        </li>
        <li>
          <NavLink to="/san-pham" className={activeMenu}>
            Sản phẩm
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
