import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterSlide } from "../Redux/slices/counterSlice";
const { increment, decrement } = counterSlide.actions;

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);
  return (
    <div>
      <h1>Count: {count}</h1>
      <div style={{ display: "flex", flexDirection: "column", width: "100px" }}>
        <button
          onClick={() => {
            dispatch(decrement(1));
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            dispatch(increment(1));
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
