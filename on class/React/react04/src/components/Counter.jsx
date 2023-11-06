import React, { useReducer } from "react";

export default function Counter() {
  const reducer = (preState, action = {}) => {
    switch (action.type) {
      case "counter/increment":
        return {
          ...preState,
          count: preState.count + action.payload,
        };
      default:
        return preState;
    }
  };
  const initalState = {
    count: 0,
  };
  const [state, dispatch] = useReducer(reducer, initalState);
  console.log(state);
  const handleIncrement = () => {
    dispatch({
      type: "counter/increment",
      payload: 1,
    });
  };
  return (
    <div>
      <h1>Count:</h1>
      <button type="button">-</button>
      <button type="button" onClick={handleIncrement}>
        +
      </button>
    </div>
  );
}
