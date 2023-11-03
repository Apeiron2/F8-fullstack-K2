import React, { Component } from "react";
import loadingImg from "../assets/loading.svg";
import "../assets/scss/components/_Loading.scss";
export class Loading extends Component {
  render() {
    return (
      <div className="overlay">
        <img src={loadingImg} alt="" />
      </div>
    );
  }
}

export default Loading;
