import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ChatMessege from "./ChatMessege";
import ChatForm from "./ChatForm";
import "./Chat.css";
import { useDispatch, useSelector } from "../../core/hook";

const Chat = () => {
  const state = useSelector();
  const dispatch = useDispatch();
  return (
    <div className="container py-3">
      <div className="row justify-content-center">
        <div className="col-7">
          <div className="chat-box p-2">
            <ChatMessege />
            <ChatForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
