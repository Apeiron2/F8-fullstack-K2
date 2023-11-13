import React, { useRef, useState } from "react";
import Content from "./Content";

const Counter = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  console.log(countRef);
  return (
    <div>
      <Content count={count} />
      <p>{count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Tăng
      </button>
    </div>
  );
};

export default Counter;
