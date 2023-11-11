import React, { useContext } from "react";
import Content from "./Content";
import Toggle from "./Toggle";
import { MyContext } from "../App";
import "./Theme.scss";
export default function Theme() {
  const { state } = useContext(MyContext);
  return (
    <div className={"main theme-" + state.theme}>
      <Toggle />
      <Content />
    </div>
  );
}
