import React, { useEffect } from "react";
import { useDispatch, useSelector } from "../../core/hook";

const ChatMessege = () => {
  const state = useSelector();
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("messages")) {
      state.messages = JSON.parse(localStorage.getItem("messages"));
      setTimeout(() => {
        dispatch({
          type: "chat/fetchMessages",
          payload: state.messages,
        });
      }, 1000);
    }
  }, [state.messages]);
  return (
    <form className="chat-message">
      {state.messages.map((message, index) => (
        <div key={index} className="message-item mb-3">
          {message}
        </div>
      ))}
    </form>
  );
};

export default ChatMessege;
