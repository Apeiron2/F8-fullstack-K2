import React, { useReducer } from "react";
import { reducer } from "../../reducer/reducer";
export default function AddTodo({ handleAdd, handleSearch }) {
  const initialState = {
    content: "",
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleChange = (e) => {
    dispatch({
      type: "AddToDo/onchange",
      payload: e.target.value,
    });
    function debounce(func, timeout = 1000) {
      let timer;
      return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
          func.apply(this, args);
        }, timeout);
      };
    }

    if (e.target.value) {
      debounce(handleSearch(e.target.value));
    } else {
      debounce(handleSearch(""));
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target[0].value.trim()) {
      handleAdd(state.content);
      dispatch({
        type: "AddToDo/submit",
        payload: "",
      });
    }
  };
  return (
    <form className="add-todo" onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={handleChange}
        value={state.content}
        placeholder="Thêm nhiệm vụ ..."
      />
      <button type="submit">Add</button>
    </form>
  );
}
