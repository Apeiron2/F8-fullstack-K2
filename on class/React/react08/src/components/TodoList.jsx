import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos, todoSlice } from "../Redux/slices/todoSlice";
const { add, delete: del } = todoSlice.actions;
const TodoList = () => {
  const dispatch = useDispatch();
  const { isLoading, list } = useSelector((state) => state.todo);
  const [name, setName] = useState("");
  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      dispatch(add(name));
      setName("");
    } else {
      alert("Hãy nhập công việc");
    }
  };
  const handleDelete = (index) => {
    dispatch(del(index));
  };
  useEffect(() => {
    dispatch(fetchTodos());
  }, []);
  return (
    <div className="border-2 rounded">
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label htmlFor="">Nhập công việc</label>
        <input
          type="text"
          placeholder="Công việc..."
          value={name}
          onChange={handleChange}
        />
      </form>
      {isLoading ? (
        "Loading..."
      ) : (
        <ul>
          {list.map(({ title, id }) => (
            <li key={id}>
              {title}
              {/* <button
              onClick={() => {
                handleDelete(`${id}`);
              }}
            >
              Xóa
            </button> */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
