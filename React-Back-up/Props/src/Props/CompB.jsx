import React from "react";
class CompB extends React.Component {
  render() {
    return (
      <>
        <hr />

        <h1> Component B:{this.props.one}</h1>
        <pre> {JSON.stringify(this.props)}</pre>
      </>
    );
  }
}
export default CompB;
