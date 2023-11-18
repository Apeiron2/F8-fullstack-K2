import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import {
  setAnswer,
  setMaxValue,
  setStatus,
} from "../Redux/Redux-actions/InputNumberActions";
import { setMaxTime } from "../Redux/Redux-actions/CounterActions";
import { resetTurn } from "../Redux/Redux-actions/HistoryActions";

const RangeSlide = ({
  color = "#02b9bd",
  width = "100%",
  maxValue = 2048,
  rangeNumber = 5,
  valueOriginal = 1,
}) => {
  const dispatch = useDispatch();
  const sliderRef = useRef(null);
  const [position, setPosition] = useState((valueOriginal / maxValue) * 100);
  const [value, setValue] = useState(valueOriginal);
  const [isMoving, setMoving] = useState(false);
  const [isShowing, setShowing] = useState(false);

  // Hover Dot
  const handleDotLeave = (e) => {
    e.stopPropagation();
    setShowing(false);
  };
  const handleDotEnter = (e) => {
    e.stopPropagation();
    setShowing(true);
  };
  //
  const getNewValue = (position) => {
    return position ? Math.round((position / 100) * maxValue) : 1;
  };
  // Mouse Down
  const handleDotDown = (e) => {
    e.stopPropagation();
    setMoving(true);
  };
  const handleBarDown = (e) => {
    const offsetX = e.nativeEvent.offsetX;
    let newPosition = (offsetX / sliderRef.current.clientWidth) * 100;
    if (newPosition > 100) newPosition = 100;
    if (newPosition < 0) newPosition = 0;
    setPosition(newPosition);
    setValue(getNewValue(newPosition));
    setMoving(true);
  };

  // Mouse Move
  useEffect(() => {
    if (isMoving) {
      const slider = sliderRef.current;
      const offsetLeft = slider.offsetLeft;
      const inner = slider.children[0];
      const dot = slider.children[1];
      let newPosition = position;
      const onChange = (position) => {
        inner.style.width = `${position}%`;
        dot.style.left = `${position}%`;
        dot.children[0].innerText = getNewValue(position);
      };
      const movingDot = (e) => {
        newPosition = ((e.clientX - offsetLeft) / slider.clientWidth) * 100;
        if (newPosition >= 100) {
          newPosition = 100;
        }
        if (newPosition <= 0) {
          newPosition = 0;
        }
        onChange(newPosition);
      };
      const endMovingDot = () => {
        setPosition(newPosition);
        setValue(getNewValue(newPosition));
        setMoving(false);
      };
      document.addEventListener("mousemove", movingDot);
      document.addEventListener("mouseup", endMovingDot);
      return () => {
        document.removeEventListener("mousemove", movingDot);
        document.removeEventListener("mouseup", endMovingDot);
      };
    }
  }, [isMoving]);

  useEffect(() => {
    dispatch(setMaxValue(value));
    dispatch(setAnswer(value));
    dispatch(setMaxTime(value));
    dispatch(resetTurn());
    dispatch(setStatus(null));
  }, [value]);
  return (
    <div className="range-slide flex flex-col" style={{ userSelect: "none" }}>
      <h1 className="text-3xl mb-10">
        {"Bạn phải tìm một số trong khoảng từ 1 đến " + value}
      </h1>
      <div
        className=" border rounded h-2 relative cursor-pointer "
        ref={sliderRef}
        onMouseDown={handleBarDown}
        style={{ width: `${width}`, borderColor: `${color}` }}
      >
        <div
          className="inner border rounded h-2 absolute top-1/2 left-0"
          style={{
            width: `${position}%`,
            translate: "0 -50%",
            backgroundColor: `${color}`,
          }}
        ></div>
        <div
          className="dot border-white border-2 rounded-full w-4 h-4 absolute top-1/2 cursor-pointer"
          style={{
            translate: "-50% -50%",
            left: `${position}%`,
            backgroundColor: `${color}`,
            userSelect: "none",
          }}
          onMouseDown={handleDotDown}
          onMouseLeave={handleDotLeave}
          onMouseEnter={handleDotEnter}
        >
          <p
            className="absolute text-center py-1 px-2 top-1/2 left-1/2 rounded text-white"
            style={{
              backgroundColor: `${color}`,
              translate: "-50% -150%",
              display: `${isShowing ? "block" : "none"}`,
            }}
          >
            {value}
          </p>
        </div>
      </div>
      <div className="flex justify-between" style={{ width: `${width}` }}>
        {Array(rangeNumber)
          .fill(0)
          .map((item, index) => {
            const range = (maxValue - 1) / (rangeNumber - 1);
            const value = Math.floor(index * range + 1);
            return (
              <p
                key={value}
                style={{
                  translate: `${index == 0 ? "-50%" : "50%"}`,
                  userSelect: "none",
                }}
              >
                {value}
              </p>
            );
          })}
      </div>
    </div>
  );
};

export default RangeSlide;
