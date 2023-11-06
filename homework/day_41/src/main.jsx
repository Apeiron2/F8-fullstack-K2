import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Header from "./components/Header";
import Loading from "./components/Loading.jsx";
import { client } from "../server/client.js";
import { getApiKey } from "../server/apiKey.js";
import { Cookie } from "../server/cookie.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
(async () => {
  root.render(
    <React.StrictMode>
      <Loading />
    </React.StrictMode>
  );

  let listTodo = [];
  const handleData = async () => {
    if (!listTodo.length) {
      let email = Cookie.get("emailUser");
      if (!email) {
        email = prompt("Nhập email: ");
        Cookie.set("emailUser", email, 60 * 1000);
      }
      const { response, data } = await getApiKey(email);
      if (response.ok) {
        // Lấy được ApiKey
        const { response, data } = await client.get("/todos");
        if (response.ok) {
          listTodo = data.data.listTodo;
        }
      } else {
        // Không lấy được ApiKey
        Cookie.set("emailUser", email, 0);
        alert(data.message);
        await handleData();
      }
    }
  };
  await handleData();
  root.render(
    <React.StrictMode>
      <Header />
      <App listTodo={listTodo} />
    </React.StrictMode>
  );
})();
