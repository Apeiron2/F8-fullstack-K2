import React, { useEffect, useReducer } from "react";
import AddTodo from "./AddTodo";
import Todo from "./Todo";
import { reducer } from "../../reducer/reducer";
import { client } from "../../helper/client";
import { refreshApiKey } from "../../helper/apiKey";

export default function TodoList({ handleLoading, data }) {
  const initialState = {
    todoList: data,
    search: data,
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleDelete = async (id) => {
    handleLoading(true);
    const { response, data } = await client.delete(`/todos/${id}`);

    if (response.ok) {
      // Xóa thành công
      dispatch({
        type: "TodoList/delete",
        payload: id,
      });
    } else {
      //Xóa thất bại
      if (data.code == 401) {
        // lỗi authorized
        const { response, data } = await refreshApiKey();
        if (response.ok) {
          await client.delete(`/todos/${id}`);
          dispatch({
            type: "TodoList/delete",
            payload: id,
          });
        } else {
          alert(data.message);
        }
      } else alert(data.message);
    }
    handleLoading(false);
  };
  const handleAdd = async (content) => {
    handleLoading(true);
    const { response, data } = await client.post("/todos", { todo: content });
    if (response.ok) {
      //Thêm thành công
      dispatch({
        type: "TodoList/add",
        payload: data.data,
      });
    } else {
      //Thêm thất bại
      if (data.code == 401) {
        // lỗi authorized
        const { response, data } = await refreshApiKey();
        if (response.ok) {
          await client.post("/todos", { todo: content });
          dispatch({
            type: "TodoList/add",
            payload: data.data,
          });
        } else {
          alert(data.message);
        }
      } else alert(data.message);
    }
    handleLoading(false);
    handleSearch("");
  };
  const handleSearch = (content) => {
    dispatch({
      type: "TodoList/search",
      payload: content,
    });
  };
  useEffect(() => {
    state.search = state.todoList;
    handleSearch("");
  }, [state.todoList]);
  return (
    <div className="todo-list">
      <AddTodo handleAdd={handleAdd} handleSearch={handleSearch} />
      {state.search.length ? (
        state.search.map((todo) => (
          <Todo
            key={todo._id}
            id={todo._id}
            todo={todo.todo}
            isCompleted={todo.isCompleted}
            handleDelete={handleDelete}
          />
        ))
      ) : (
        <h1>Không có todo nào!!!</h1>
      )}
    </div>
  );
}
