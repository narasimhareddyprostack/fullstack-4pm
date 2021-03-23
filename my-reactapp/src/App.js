import React from "react";
import Message from "./components/Message/Message";
import "../src/Assets/css/learn.css";

let App = () => {
  return (
    <>
      <nav className="nav navbar-dark bg-dark">
        <a href="/"> React State Example</a>
      </nav>
      <Message />
    </>
  );
};
export default App;
