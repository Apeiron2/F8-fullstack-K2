"use client";
import { useRouter } from "next/navigation";
import React, { useRef } from "react";
import { addTodos } from "../../../service/todoService";
const TodoForm = () => {
  const router = useRouter();
  const inputRef = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const todo = {
      name,
    };
    const { response, data } = await addTodos(todo);
    inputRef.current.value = "";
    router.refresh();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Tên..." ref={inputRef} />
      <button>Thêm</button>
    </form>
  );
};

export default TodoForm;
