import React from "react";
/* import WishOne from "./StateEx/WishOne"; */
/* import Counter from "./StateEx/Counter"; */
//import Message from "./components/Message/Message";
import "../src/Assets/css/learn.css";
/* import Login from "./FormHandling/Login";
 */
import BootStrapLoginForm from "./FormHandling/BootStrapLoginForm";
let App = () => {
  return (
    <>
      <nav className="nav navbar-dark bg-dark">
        <a href="/"> React State Example</a>
      </nav>
      <BootStrapLoginForm />
    </>
  );
};
export default App;
