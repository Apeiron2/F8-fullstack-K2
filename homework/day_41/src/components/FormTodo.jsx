import React, { Component } from "react";
import "../assets/scss/components/_FormTodo.scss";
import TodoList from "./TodoList";
import { client } from "../../server/client";
export class FormTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      handleLoading: this.props.handleLoading,
    };
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    this.state.handleLoading(true);
    const { response, data } = await client.post("/todos", {
      todo: e.target[0].value,
    });
    const message = data.message;
    if (response.ok) {
      // Nếu post thành công
      e.target[0].value = null;
      const { response, data } = await client.get("/todos");
      this.setState(
        {
          data: data.data.listTodo,
        },
        this.state.handleLoading(false)
      );
      alert(message);
    }
  };
  handleDelete = async (e) => {
    const buttonEL =
      e.target.nodeName === "BUTTON" ? e.target : e.target.parentNode;
    const todoDiv = buttonEL.parentNode.parentNode;
    this.state.handleLoading(true);
    const { response, data } = await client.delete(`/todos/${todoDiv.id}`);
    if (response.ok) {
      this.setState(
        {
          data: this.state.data.filter(({ _id }) => _id !== todoDiv.id),
        },
        this.state.handleLoading(false)
      );
      alert(data.message);
    }
  };
  render() {
    const { data } = this.state;
    return (
      <div className="container d-flex flex-column justify-content-center align-items-center p-3">
        <form className="Form-todo" onSubmit={this.handleSubmit}>
          <input
            type="text"
            className="content"
            placeholder="Nhập nhiệm vụ mới ..."
          />
          <button>
            <i className="fa-solid fa-plus"></i>
          </button>
        </form>
        <TodoList
          data={data}
          handleDeleteCallBack={this.handleDelete}
          handleLoading={this.state.handleLoading}
        ></TodoList>
      </div>
    );
  }
}

export default FormTodo;
