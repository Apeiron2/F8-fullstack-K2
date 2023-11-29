"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { deleteTodo } from "../../../service/todoService";
const DeleteButton = ({ id }) => {
  const router = useRouter();
  const handleDelete = async (id) => {
    const data = await deleteTodo(id);
    router.refresh();
  };
  return (
    <b
      style={{ cursor: "pointer" }}
      onClick={() => {
        handleDelete(id);
      }}
    >
      🗑️
    </b>
  );
};

export default DeleteButton;
