import React, { Component } from "react";
import imageOne from "../../Assets/img/gm.jpg";

class Message extends Component {
  state = {
    message: "Hello",
  };
  goodMorningHandler = () => {
    this.setState({ message: "Good Morning" });
  };
  goodEveningHandler = () => {
    this.setState({ message: "Good Evening" });
  };
  goodNightHandler = () => {
    this.setState({ message: "Good Night" });
  };
  render() {
    return (
      <>
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-9">
              <div className="card">
                <div className="card-header">
                  <img src={imageOne} alt="Good Morning.." />
                  <h2> {this.state.message}</h2>
                </div>
                <div className="card-body">
                  <button
                    className="btn btn-primary mr-2"
                    onClick={this.goodMorningHandler}
                  >
                    Good Morning
                  </button>
                  <button
                    className="btn btn-success mr-2"
                    onClick={this.goodEveningHandler}
                  >
                    Good Evening
                  </button>
                  <button
                    className="btn btn-info"
                    onClick={this.goodNightHandler}
                  >
                    Good Night
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Message;
