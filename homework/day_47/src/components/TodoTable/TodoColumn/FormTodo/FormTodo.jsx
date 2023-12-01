import React, { useRef } from "react";
import "./FormTodo.scss";

const FormTodo = ({ id, setShow }) => {
  const handleCancer = () => {};
  const handleSubmit = (e) => {
    e.preventDefault();
    const content = e.target[0].value;
    if (content) {
      console.log(`Thêm ${content} vào cột ${id}`);
    }
  };
  return (
    <div className="FormTodo">
      <form onSubmit={handleSubmit}>
        <h1>Thêm công việc</h1>
        <input type="text" placeholder="Tên công việc ..." />
        <hr />
        <div>
          <button type="submit">OK</button>
          <button
            type="button"
            onClick={() => {
              setShow(false);
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormTodo;
