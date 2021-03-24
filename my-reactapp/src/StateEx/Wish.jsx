import React from "react";
class Wish extends React.Component {
  state = {
    message: "Hello",
  };
  changeMessage = () => {
    this.setState({ message: "Good Afternoon" });
  };
  changeGNMessage() {
    this.setState({ message: "Good Night" });
  }
  render() {
    return (
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
                    onClick={() => {
                      this.setState({ message: "Good Morning" });
                    }}
                  >
                    GM
                  </button>
                  <button
                    className="btn btn-success mr-4"
                    onClick={this.changeMessage}
                  >
                    GA
                  </button>
                  <button
                    className="btn btn-info"
                    onClick={() => {
                      this.changeGNMessage();
                    }}
                  >
                    GN
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

export default Wish;
