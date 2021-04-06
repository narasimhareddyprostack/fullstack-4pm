import React, { Component } from "react";
import Footer from "./Footer";
class Body extends Component {
  render() {
    return (
      <React.Fragment>
        <h1> React Body Component</h1>
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h4> Props Drilling Exmpale</h4>
                </div>
                <div className="card-body">{this.props.employee.name}</div>
              </div>
            </div>
          </div>
        </div>
        <Footer employee={this.props.employee} />
      </React.Fragment>
    );
  }
}

export default Body;
