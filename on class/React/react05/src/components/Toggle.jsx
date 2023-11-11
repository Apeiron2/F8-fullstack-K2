import React, { useContext } from "react";
import { MyContext } from "../App";

export default function Toggle() {
  const { state, setTheme } = useContext(MyContext);
  const { theme } = state;
  return (
    <button
      onClick={() => {
        setTheme(theme == "light" ? "dark" : "light");
      }}
    >
      Toogle {theme == "dark" ? "light" : "dark"} Theme
    </button>
  );
}
