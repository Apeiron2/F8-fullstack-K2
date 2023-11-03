import React, { Component } from "react";
import logo from "../assets/todo.svg";
import "../assets/scss/components/_Header.scss";
export class Header extends Component {
  render() {
    return (
      <div className="Header">
        <img src={logo} alt="logo" />
        <h1>TODO</h1>
      </div>
    );
  }
}

export default Header;
