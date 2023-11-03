import React, { Component } from "react";
import Todo from "./Todo";
import "../assets/scss/components/_TodoList.scss";
export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listTodo: this.props.data,
      handleDeleteCallBack: this.props.handleDeleteCallBack,
      handleLoading: this.props.handleLoading,
    };
  }
  static getDerivedStateFromProps(props, state) {
    return {
      listTodo: props.data,
    };
  }
  render() {
    return (
      <div className="Todo-list">
        {this.state.listTodo.length ? (
          this.state.listTodo.map((todo) => (
            <Todo
              key={todo._id}
              {...todo}
              handleDelete={this.state.handleDeleteCallBack}
              handleLoading={this.state.handleLoading}
            ></Todo>
          ))
        ) : (
          <React.Fragment>
            <h1>Không có todo</h1>
          </React.Fragment>
        )}
      </div>
    );
  }
}
