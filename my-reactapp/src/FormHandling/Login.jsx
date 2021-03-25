import React from "react";
class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }
  emailHandler = (event) => {
    console.log(event.target.value);
    this.setState({ email: event.target.value });
  };
  passwordHandler = (event) => {
    this.setState({ passwrod: event.target.value });
  };
  render() {
    return (
      <>
        <h1> Login Form</h1>
        <hr />

        <pre>{JSON.stringify(this.state)}</pre>
        <form>
          <label> Email</label>
          <input type="email" onChange={this.emailHandler} name="email" />{" "}
          <br />
          <br />
          <label> Password</label>
          <input
            type="password"
            name="password"
            onChange={this.passwordHandler}
          />{" "}
          <br />
          <br />
          <button type="submit"> Login</button>
        </form>
      </>
    );
  }
}
export default Login;
