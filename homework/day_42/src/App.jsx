import React, { useState } from "react";
import "./assets/sass/styles.scss";
import { Cookie } from "./helper/cookie";
import { client } from "./helper/client";
import Login from "./Login";
import Loading from "./components/layouts/Loading";
import Header from "./components/layouts/Header";
import TodoList from "./components/TodoList/TodoList";

const App = ({ listTodo }) => {
  const [isLoading, setLoading] = useState(false);
  const [email, setEmail] = useState(Cookie.get("Email"));
  const [data, setData] = useState(listTodo);
  const handleLog = async (response) => {
    if (response.ok) {
      //login thành công
      await getData();
      setEmail(Cookie.get("Email"));
    } else {
      //login không thành công
      setEmail("");
    }
  };
  const getData = async () => {
    const { response, data: _data } = await client.get("/todos");
    if (response.ok) {
      setData(_data.data.listTodo);
    } else {
      Cookie.set("Email", "", 0);
      setEmail("");
    }
  };
  const handleLoading = (boolean) => {
    setLoading(boolean);
  };
  return (
    <>
      {email ? (
        <React.Fragment>
          <Header />
          <TodoList handleLoading={handleLoading} data={data} />
          {isLoading && <Loading />}
        </React.Fragment>
      ) : (
        <Login handleLogin={handleLog} />
      )}
    </>
  );
};

export default App;
