import React from "react";
import LoadingImg from "/src/assets/Loading.svg";
const Loading = () => {
  return (
    <div className="vw-100 vh-100 d-flex justify-content-center align-items-center">
      <img src={LoadingImg} alt="" />
    </div>
  );
};

export default Loading;
