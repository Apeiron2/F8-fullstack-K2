import React, { useRef } from "react";
import "./FormTodo.scss";
import { addTasks } from "../../../../services/todoService";

const FormTodo = ({ column: _column, setShow }) => {
  const { column, columnName } = _column;
  const inputRef = useRef();
  const handleCancer = (e) => {
    inputRef.current.value = "";
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const content = e.target[0].value;
    if (content) {
      addTasks({
        column,
        columnName,
        content,
      });
    }
    inputRef.current.value = "";
  };
  return (
    <div className="FormTodo">
      <form onSubmit={handleSubmit}>
        <h1>Thêm công việc</h1>
        <input type="text" placeholder="Tên công việc ..." ref={inputRef} />
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
