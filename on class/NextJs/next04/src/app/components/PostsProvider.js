"use client";
import React, { useState } from "react";

const PostsProvider = ({ children }) => {
  const [show, setShow] = useState(true);
  return (
    <div>
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        Toggle
      </button>
      {show && children}
    </div>
  );
};

export default PostsProvider;
