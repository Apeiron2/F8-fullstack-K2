import React, { useRef, useState } from "react";
import "./TodoColumnAdd.scss";
const TodoColumnAdd = () => {
  const [show, setShow] = useState(false);

  const handleClick = (e) => {
    setShow(true);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Tạo bảng: " + e.target[0].value);
  };
  const handleCancer = (e) => {
    setShow(false);
  };
  return (
    <div className="TodoColumnAdd">
      {show ? (
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="List name ..." defaultValue={""} />
          <button type="button" onClick={handleCancer}>
            ❌
          </button>
        </form>
      ) : (
        <button onClick={handleClick}>+</button>
      )}
    </div>
  );
};

export default TodoColumnAdd;
