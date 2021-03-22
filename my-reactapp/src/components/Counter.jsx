import React from "react";
class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 1,
    };
  }
  incrCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  render() {
    return (
      <React.Fragment>
        <h2>Counter Value:{this.state.counter}</h2>
        <button className="btn btn-danger" onClick={this.incrCounter}>
          Increment Value
        </button>
      </React.Fragment>
    );
  }
}

export default Counter;
