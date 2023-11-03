import React from "react";
import Todo from "./components/Todo";
import Login from "./components/Login";
const App = () => {
  return (
    <div>
      <Login />
      <Todo content="Làm slide"> </Todo>
    </div>
  );
};

export default App;
