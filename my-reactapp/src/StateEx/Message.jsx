import React from "react";
class Message extends React.Component {
  state = {
    emp_Name: "Mahesh",
  };

  /* changeHero() {
    console.log("Inside changeHero");
    this.setState({
      emp_Name: "Arjun",
    });
  } */
  render() {
    return (
      <React.Fragment>
        <h1>{this.state.emp_Name}</h1>
        <button
          onClick={() => {
            this.setState({ emp_Name: "Arjun" });
          }}
        >
          Chane Hero
        </button>
      </React.Fragment>
    );
  }
}

export default Message;
