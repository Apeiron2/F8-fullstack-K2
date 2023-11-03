import React from "react";

const Counter = () => {
  const [count, setCount] = React.useState(0);
  const [content, setContent] = React.useState("vcl");
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h1>Count: {count}</h1>
      <h2></h2>
      <button type="button" onClick={handleIncrement}>
        +
      </button>
      <button type="button" onClick={handleDecrement}>
        -
      </button>
    </div>
  );
};

export default Counter;
