import React, { Component } from "react";
import imageOne from "../../Assets/img/gm.jpg";
import imageTwo from "../../Assets/img/ga.jpg";
import imageThree from "../../Assets/img/gm.jpg";
const x = require("../../Assets/img/ga.jpg");

class Message extends Component {
  state = {
    message: "Hello",
    image: "",
  };
  goodMorningHandler = () => {
    this.setState({ message: "Good Morning", image: imageOne });
  };
  goodEveningHandler = () => {
    this.setState({
      message: "Good Evening",
      image: x,
    });
  };
  goodNightHandler = () => {
    this.setState({
      message: "Good Night",
      image:
        "https://i.pinimg.com/originals/fc/45/8a/fc458aa45db9b82eaca78f9920c1f410.jpg",
    });
  };
  render() {
    return (
      <>
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-9">
              <div className="card">
                <div className="card-header">
                  <img src={this.state.image} alt="Good Morning.." />
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
