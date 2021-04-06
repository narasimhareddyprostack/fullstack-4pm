import React from "react";
import Navbar from "./PropsDrilling/Navbar";
import "../src/Assets/css/learn.css";
let App = () => {
  let employee = {
    name: "kavitha",
    age: 24,
    loc: "Bangalore",
  };
  return (
    <>
      <Navbar employee={employee} />
    </>
  );
};
export default App;
