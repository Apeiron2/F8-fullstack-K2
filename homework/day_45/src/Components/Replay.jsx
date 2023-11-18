import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { count } from "../Redux/Redux-actions/CounterActions";
import {
  setAnswer,
  setStatus,
} from "../Redux/Redux-actions/InputNumberActions";

const Replay = () => {
  const btnRef = useRef();
  const maxValue = useSelector((state) => state.inputNumber.maxValue);
  const dispatch = useDispatch();
  const handleClick = () => {
    btnRef.current.style.scale = "0.9";
    dispatch(setAnswer(maxValue));
    dispatch(count(0));
    dispatch(setStatus(null));
  };
  useEffect(() => {
    const replay = (e) => {
      if (e.key == "Enter") {
        btnRef.current.click();
      }
    };
    document.addEventListener("keydown", replay);
    return () => {
      document.removeEventListener("keydown", replay);
    };
  });
  return (
    <button
      className="my-3 px-5 py-2 bg-cyan-400 text-xl rounded-xl hover:bg-cyan-500"
      ref={btnRef}
      onClick={handleClick}
    >
      Chơi lại
    </button>
  );
};

export default Replay;
