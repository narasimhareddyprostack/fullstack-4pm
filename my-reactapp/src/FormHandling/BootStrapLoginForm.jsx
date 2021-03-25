import React, { Component } from "react";
class BootStrapLoginForm extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      mobile: "",
    };
  }
  inputHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state);
  };
  render() {
    return (
      <div>
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-5">
              <pre>{JSON.stringify(this.state)}</pre>
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="email"
                    onChange={this.inputHandler}
                    name="email"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Password"
                    onChange={this.inputHandler}
                    name="password"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Mobile"
                    onChange={this.inputHandler}
                    name="mobile"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    className="form-control btn btn-primary"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BootStrapLoginForm;
