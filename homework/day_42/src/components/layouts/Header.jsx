import React from "react";
import LogoTodo from "../../assets/img/todo.svg";
export default function Header() {
  return (
    <header className="header">
      <img src={LogoTodo} alt="Logo" />
      <h1>TODO</h1>
    </header>
  );
}
