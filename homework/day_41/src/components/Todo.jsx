import React, { Component } from "react";
import "../assets/scss/components/_Todo.scss";
import { client } from "../../server/client";
export class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props._id,
      todo: this.props.todo,
      isCompleted: this.props.isCompleted,
      isEditForm: false,
      createdAt: this.props.createdAt,
      originalContent: this.props.todo,
      handleDelete: this.props.handleDelete,
      handleLoading: this.props.handleLoading,
    };
  }
  changeFormEdit = (e) => {
    const buttonEL =
      e.target.nodeName === "BUTTON" ? e.target : e.target.parentNode;
    const todoDiv = buttonEL.parentNode.parentNode;
    const inputEL = todoDiv.querySelector("#content");
    inputEL.focus();
    inputEL.setSelectionRange(0, inputEL.value.length);
    this.setState({
      isEditForm: true,
    });
  };
  handleChange = (e) => {
    this.setState({
      todo: e.target.value,
    });
  };
  handleComplete = async (e) => {
    const content = e.target;
    content.classList.toggle("completed");
    this.state.handleLoading(true);
    const { response, data } = await client.patch(`/todos/${this.state.id}`, {
      isCompleted: content.classList.contains("completed"),
    });
    this.state.handleLoading(false);
    if (response.ok) {
      alert(data.message);
    }
  };

  handleEdit = async (e) => {
    const buttonEL =
      e.target.nodeName === "BUTTON" ? e.target : e.target.parentNode;
    const todoDiv = buttonEL.parentNode.parentNode;
    const contentEL = todoDiv.querySelector("#content");
    const action = buttonEL.classList[0] === "ok";
    this.setState({
      todo: action ? contentEL.value : this.state.originalContent,
      isEditForm: false,
      originalContent: action ? contentEL.value : this.state.originalContent,
    });
    if (action) {
      this.state.handleLoading(true);
      const { response, data } = await client.patch(`/todos/${todoDiv.id}`, {
        todo: this.state.todo,
        isCompleted: this.state.isCompleted,
      });
      this.state.handleLoading(false);
      if (response.ok) {
        alert(data.message);
      }
    }
  };

  render() {
    const { id, todo, isEditForm, isCompleted } = this.state;
    return (
      <label
        htmlFor="content"
        className="Todo"
        key={id}
        id={id}
        style={isEditForm ? { background: "white", cursor: "text" } : {}}
      >
        <div className="content">
          <input
            type="text"
            value={todo}
            onChange={this.handleChange}
            onClick={isEditForm ? null : this.handleComplete}
            id="content"
            readOnly={!isEditForm}
            className={isCompleted ? "completed" : null}
            style={isEditForm ? { cursor: "text", color: "black" } : {}}
          />
        </div>
        <div className="feature">
          {isEditForm ? (
            <React.Fragment>
              <button type="button" className="ok" onClick={this.handleEdit}>
                <i className="fa-solid fa-check"></i>
              </button>
              <button
                type="button"
                className="cancer"
                onClick={this.handleEdit}
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <button
                type="button"
                className="edit"
                onClick={this.changeFormEdit}
              >
                <i className="fa-regular fa-pen-to-square"></i>
              </button>
              <button
                type="button"
                className="delete"
                onClick={this.state.handleDelete}
              >
                <i className="fa-regular fa-trash-can"></i>
              </button>
            </React.Fragment>
          )}
        </div>
      </label>
    );
  }
}

export default Todo;
