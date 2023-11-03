import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Header from "./components/Header";
import Loading from "./components/Loading.jsx";
import { client } from "../server/client.js";
import { getApiKey } from "../server/apiKey.js";

let email = localStorage.getItem("emailUser");

if (!email) {
  email = prompt("Nhập email: ");
  localStorage.setItem("emailUser", email);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
(async () => {
  root.render(
    <React.StrictMode>
      <Loading />
    </React.StrictMode>
  );

  let listTodo = [];
  await getApiKey(email);
  const { response, data } = await client.get("/todos");
  if (response.ok) {
    listTodo = data.data.listTodo;
  }

  root.render(
    <React.StrictMode>
      <Header />
      <App listTodo={listTodo} />
    </React.StrictMode>
  );
})();
