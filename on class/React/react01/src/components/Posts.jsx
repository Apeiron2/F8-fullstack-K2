import React from "react";

const Posts = ({ onGetData }) => {
  return (
    <div>
      <button
        type="button"
        onClick={() => {
          onGetData("Khó vcl");
        }}
      >
        Click me
      </button>
    </div>
  );
};

export default Posts;
