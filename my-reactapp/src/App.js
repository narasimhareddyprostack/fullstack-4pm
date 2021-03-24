import React from "react";
import WishOne from "./StateEx/WishOne";
import "../src/Assets/css/learn.css";
import Counter from "./StateEx/Counter";
let App = () => {
  return (
    <>
      <nav className="nav navbar-dark bg-dark">
        <a href="/"> React State Example</a>
      </nav>

      <Counter />
    </>
  );
};
export default App;
