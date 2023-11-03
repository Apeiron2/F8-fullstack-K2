import React, { Component } from "react";
import FormTodo from "./components/FormTodo";
import Loading from "./components/Loading";
export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: this.props.isLoading,
      data: this.props.listTodo,
    };
  }
  handleLoading = (boolean) => {
    this.setState({
      isLoading: boolean,
    });
  };
  render() {
    const { data, isLoading } = this.state;
    return (
      <React.Fragment>
        <FormTodo data={data} handleLoading={this.handleLoading}></FormTodo>
        {isLoading ? <Loading /> : null}
      </React.Fragment>
    );
  }
}

export default App;
