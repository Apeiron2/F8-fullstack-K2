import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  inputUpdate,
  setStatus,
} from "../Redux/Redux-actions/InputNumberActions";
import { count } from "../Redux/Redux-actions/CounterActions";
import {
  updateTurn,
  updateHistories,
} from "../Redux/Redux-actions/HistoryActions";

const InputNumber = () => {
  const { guess, answer, maxValue, status } = useSelector(
    (state) => state.inputNumber
  );
  const { maxTime } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const inputRef = useRef();
  const handleInput = (e) => {
    let value = e.target.value;
    if (e.nativeEvent.inputType === "insertText") {
      // Check số lượng ký tự
      if (+value <= maxValue) {
        setValue(value.replace(/[^0-9]/g, ""));
      }
    } else {
      setValue(value);
    }
  };
  const handleSubmit = () => {
    dispatch(count());
    dispatch(setStatus(+guess - answer));
    dispatch(updateTurn(+value));
  };
  useEffect(() => {
    // Cập nhật guess
    dispatch(inputUpdate(value));
  }, [value]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
          {
            inputRef.current.focus();
          }
          break;
        case "ArrowUp":
          {
            setValue(+value + 1);
          }
          break;
        case "ArrowDown":
          {
            setValue(+value - 1 > 0 ? +value - 1 : 0);
          }
          break;
        case "Enter": {
          handleSubmit();
        }
        default:
          break;
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  });
  return (
    <div className="w-full flex flex-col gap-3">
      <label htmlFor="guess">Nhập số bạn đoán:</label>
      <input
        id="guess"
        type="text"
        placeholder="Thử đi! Bạn sợ thua à?"
        className="border-2 rounded-xl p-3 "
        value={value}
        onInput={handleInput}
        ref={inputRef}
      />
    </div>
  );
};

export default InputNumber;
