import React, { Component } from "react";
import Body from "./Body";
class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="nav navbar-dark bg-dark">
          <a href="./"> React Props Drilling</a>
        </nav>
        <Body employee={this.props.employee} />
      </React.Fragment>
    );
  }
}

export default Navbar;
