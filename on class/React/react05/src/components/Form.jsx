import React from "react";
import { useDispatch } from "../core/hook";

const Form = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "message/update",
      payload: e.target[0].value,
    });
  };
  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        width: "200px",
      }}
    >
      <label htmlFor="message">Nhập gì đó?</label>
      <input type="text" id="message" />
    </form>
  );
};

export default Form;
