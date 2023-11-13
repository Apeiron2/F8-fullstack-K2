import React, { useState, memo } from "react";
const Content = ({ count }) => {
  const [content, setContent] = useState(count);
  console.log(content);
  return (
    <>
      <h2>{content}</h2>
    </>
  );
};

export default memo(Content);
