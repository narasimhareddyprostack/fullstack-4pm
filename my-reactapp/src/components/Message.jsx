import React from "react";
class Message extends React.Component {
  state = {
    msg: "Hello",
  };

  changeMessage = () => {
    this.setState({ msg: "Hello, Good Morning" });
    console.log(this.state.msg);
  };
  render() {
    return (
      <React.Fragment>
        <h2>{this.state.msg} </h2>
        <button className="btn btn-primary" onClick={this.changeMessage}>
          Change Message
        </button>
      </React.Fragment>
    );
  }
}

export default Message;
