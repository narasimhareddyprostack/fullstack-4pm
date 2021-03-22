import React from "react";
import CompB from "./CompB";
class CompA extends React.Component {
  user_Name = "Narasimha";
  render() {
    return (
      <React.Fragment>
        <h1> React Component - Comp A Data: - {this.user_Name}</h1>
        <CompB one={this.user_Name} />
      </React.Fragment>
    );
  }
}

export default CompA;
