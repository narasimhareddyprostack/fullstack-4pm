import React from "react";
class Counter extends React.Component {
  state = {
    counter: 0,
  };
  counterHandler = (value) => {
    this.setState({ counter: this.state.counter + value });
  };

  /* counterHandler = (value) => {
    if (value == "decr") {
      this.setState({ counter: this.state.counter - 1 });
    } else {
      this.setState({ counter: this.state.counter + 1 });
    }
  }; */
  render() {
    return (
      <React.Fragment>
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h4> Counter: {this.state.counter}</h4>
                </div>
                <div className="card-body">
                  <button
                    className="btn btn-secondary mr-4"
                    onClick={this.counterHandler.bind(this, -1)}
                  >
                    Decr
                  </button>
                  <button
                    className="btn btn-success"
                    onClick={this.counterHandler.bind(this, 1)}
                  >
                    Incr
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Counter;
