import React, { useEffect } from "react";
import { useDispatch, useSelector } from "../../core/hook";

const ChatForm = () => {
  const state = useSelector();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const content = e.target[0].value;
    if (content) {
      dispatch({
        type: "message/update",
        payload: content,
      });
    }
    state.messages.push(content);
    localStorage.setItem("messages", JSON.stringify(state.messages));
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Tin nhắn..."
        ></input>
        <button className="btn btn-primary">Gửi</button>
      </div>
    </form>
  );
};

export default ChatForm;
