import React, { Component } from "react";
import "../assets/Todo.scss";
export class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = { content: props.content };
  }
  handleChange = (e) => {
    this.setState({
      content: e.target.value,
    });
  };
  handleEdit() {}
  render() {
    const { content } = this.state;
    return (
      <div className="Todo">
        <input type="text" value={content} onChange={this.handleChange} />
      </div>
    );
  }
}

export default Todo;
