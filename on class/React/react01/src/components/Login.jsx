import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export class Login extends Component {
  constructor() {
    super();
    this.state = {
      form: {
        name: "",
        email: "",
      },
      user: [],
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const { name, email } = this.state.form;
    this.setState({
      user: [...this.state.user, { name, email }],
      form: {
        name: "",
        email: "",
      },
    });
  };
  handleChangeValue = (e) => {
    this.setState({
      form: { ...this.state.form, [e.target.name]: e.target.value },
    });
  };
  render() {
    return (
      <div className="container py-3">
        <div className="row justify-content-center">
          <form className="col-6" action="" onSubmit={this.handleSubmit}>
            <div className="mb-3">
              <label>Tên</label>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Tên..."
                onChange={this.handleChangeValue}
                value={this.state.form.name}
              />
            </div>
            <div className="mb-3">
              <label>Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Email..."
                onChange={this.handleChangeValue}
                value={this.state.form.email}
              />
            </div>
            <div className="d-grid">
              <button className="btn btn-primary">Đăng nhập</button>
            </div>
          </form>
          {this.state.user.map(({ name, email }, index) => (
            <div className="user" key={index}>
              <h2>Tên: {name}</h2>
              <h3>Email: {email}</h3>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Login;
