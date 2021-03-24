import React, { Component } from "react";

class WishOne extends Component {
  state = {
    message: "Hello",
  };

  changeMessage = (value) => {
    this.setState({ message: value });
  };
  render() {
    return (
      <div>
        <React.Fragment>
          <div className="container mt-4">
            <div className="row">
              <div className="col-md-6">
                <div className="card">
                  <div className="card-header">
                    <h3> {this.state.message}</h3>
                  </div>
                  <div className="card-body">
                    <button
                      className="btn btn-primary mr-4"
                      onClick={this.changeMessage.bind(this, "Good Morning")}
                    >
                      GM
                    </button>
                    <button
                      className="btn btn-success mr-4"
                      onClick={this.changeMessage.bind(this, "Good After noon")}
                    >
                      GA
                    </button>
                    <button
                      className="btn btn-info"
                      onClick={this.changeMessage.bind(this, "Good Night")}
                    >
                      GN
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      </div>
    );
  }
}

export default WishOne;
