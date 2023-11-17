import React from "react";
import moon from "../assets/Theme/moon.png";
import sun from "../assets/Theme/sun.png";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../Redux/Redux-actions/ThemeToggleActions";
const ThemeToggle = ({ size = "20px" }) => {
  const theme = useSelector((state) => state.theme.isLight);
  const dispatch = useDispatch();
  const changeTheme = () => {
    dispatch(toggle());
  };
  return (
    <div
      className="flex justify-center items-center overflow-hidden w-fit h-fit rounded-full cursor-pointer border-2 border-sky-100 p-2 fixed right-5 top-5 hover:border-green-500"
      onClick={changeTheme}
      style={{
        userSelect: "none",
        backgroundColor: `${theme ? "#fff" : "grey"}`,
      }}
    >
      <img
        src={theme ? sun : moon}
        alt=""
        style={{ width: `${size}`, height: `${size}` }}
      />
    </div>
  );
};

export default ThemeToggle;
