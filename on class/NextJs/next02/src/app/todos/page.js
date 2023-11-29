import React from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import TodoForm2 from "./TodoForm2";

const Todos = () => {
  return (
    <div>
      <h1>Todos App</h1>
      <TodoList />
      <hr style={{ margin: "20px 0px" }} />
      {/* <TodoForm /> */}
      <TodoForm2 />
    </div>
  );
};

export default Todos;
