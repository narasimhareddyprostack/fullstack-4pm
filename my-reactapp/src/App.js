import React from "react";
/* import WishOne from "./StateEx/WishOne"; */
/* import Counter from "./StateEx/Counter"; */
import Message from "./components/Message/Message";
import "../src/Assets/css/learn.css";
/* import Login from "./FormHandling/Login";
 */
/* import BootStrapLoginForm from "./FormHandling/BootStrapLoginForm"; */
/* import ContactTable from "./TableData/ContactTable"; */
import Signin from "./components/Signin/Signin";
let App = () => {
  return (
    <>
      <nav className="nav navbar-dark bg-dark">
        <a href="/"> React Table Example</a>
      </nav>
      <Signin />
      <Message />
    </>
  );
};
export default App;
