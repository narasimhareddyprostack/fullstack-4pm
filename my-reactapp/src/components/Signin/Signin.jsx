import React, { Component } from "react";

class Signin extends Component {
  state = {
    email: "",
    password: "",
  };
  emailHandler = (event) => {
    console.log(event.target.value);
    this.setState({ email: event.target.value });
  };
  passwordHandler = (event) => {
    this.setState({ password: event.target.value });
  };
  submitHander = (event) => {
    event.preventDefault();
    console.log(this.state.email);
  };
  render() {
    return (
      <React.Fragment>
        <div className="container mt-4">
          <div className="row">
            {/*  <pre>{JSON.stringify(this.state)}</pre> */}
            <div className="col-md-6">
              <form onSubmit={this.submitHander}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="email"
                    name="email"
                    onChange={this.emailHandler}
                    value={this.state.email}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="password"
                    name="password"
                    onChange={this.passwordHandler}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="submit"
                    className="form-control btn btn-success"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Signin;
