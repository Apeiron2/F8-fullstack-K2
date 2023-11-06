import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { client } from "./helper/client.js";
import { refreshApiKey } from "./helper/apiKey";
import { Cookie } from "./helper/cookie.js";

let listTodo = [];
const start = async () => {
  if (Cookie.get("Email")) {
    await refreshApiKey();
    const { response, data } = await client.get("/todos");
    if (response.ok) {
      listTodo = data.data.listTodo;
    } else {
      Cookie.set("Email", "", 0);
    }
  }
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <App listTodo={listTodo} />
    </React.StrictMode>
  );
};
start();
