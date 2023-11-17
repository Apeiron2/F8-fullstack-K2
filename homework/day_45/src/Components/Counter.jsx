import React from "react";
import { useSelector } from "react-redux";

export const Counter = () => {
  const { maxTime, times } = useSelector((state) => state.counter);
  return (
    <h2 className="text-4xl my-3">
      Bạn còn {maxTime - times}/{maxTime} lần
    </h2>
  );
};
