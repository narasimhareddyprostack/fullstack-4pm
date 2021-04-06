import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <hr />
        <h1> React - Footer Component Data : {this.props.employee.name}</h1>
      </React.Fragment>
    );
  }
}

export default Footer;
