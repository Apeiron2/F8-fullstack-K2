import React from "react";
import { useSelector } from "../core/hook";

const Message = () => {
  const state = useSelector();
  const { message } = state;
  return (
    <div>
      <h1>{message ? message : "Message"}</h1>
    </div>
  );
};

export default Message;
