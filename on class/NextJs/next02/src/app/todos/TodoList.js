import React from "react";
import RefreshButton from "./RefreshButton";
import DeleteButton from "./DeleteButton";
import { getTodos } from "../../../service/todoService";

const TodoList = async () => {
  const { data: todos } = await getTodos();
  return (
    <>
      <ul>
        {todos.map(({ id, name }) => (
          <li key={id}>
            {name} <DeleteButton id={id} />
          </li>
        ))}
      </ul>
      <RefreshButton />
    </>
  );
};

export default TodoList;
