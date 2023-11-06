import React, { useEffect } from "react";

const Counter = () => {
  const [count, setCount] = React.useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  useEffect(() => {
    console.log();
  });
  useEffect(() => {
    console.log("Hello F8");
  });
  return (
    <div>
      <h1>Count: {count}</h1>
      <button type="button" onClick={handleDecrement}>
        -
      </button>
      <button type="button" onClick={handleIncrement}>
        +
      </button>
      {console.log("Re-render")}
    </div>
  );
};

export default Counter;
