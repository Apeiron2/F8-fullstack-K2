"use client";
import React from "react";
import { useSelector } from "react-redux";

const SaveBtn = () => {
  const element = useSelector((state) => state.element);
  return (
    <div className="d-flex gap-3">
      <a
        href="/"
        className="btn btn-primary"
        onClick={(e) => {
          e.preventDefault();
          console.log(JSON.stringify(element));
        }}
      >
        Save
      </a>
      <button className="btn btn-success">Chia sẻ</button>
    </div>
  );
};

export default SaveBtn;
