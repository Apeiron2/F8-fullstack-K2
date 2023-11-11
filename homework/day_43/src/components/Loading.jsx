import React from "react";
import loadingImg from "../assets/loading.svg";
const Loading = () => {
  return (
    <div className="d-flex justify-content-center align-items-center position-fixed vw-100 vh-100">
      <img src={loadingImg} alt="" />
    </div>
  );
};

export default Loading;
