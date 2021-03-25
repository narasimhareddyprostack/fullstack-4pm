import React from "react";
/* import WishOne from "./StateEx/WishOne"; */
import "../src/Assets/css/learn.css";
/* import Counter from "./StateEx/Counter"; */
import Message from "./components/Message/Message";
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
