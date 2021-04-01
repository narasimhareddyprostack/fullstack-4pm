import React from "react";
import "../src/Assets/css/learn.css";
import Navbar from "./Routing/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContactTable from "./TableData/ContactTable";
import Login from "./FormHandling/Login";
import ContactList from "./Axios/ContactList";
import ContactApp from "./ContactApp/ContactApp";
let App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/contacts" component={ContactTable} />
          <Route path="/login" component={Login} />
          <Route path="/contactdata" component={ContactList} />
          <Route path="/contactapp" component={ContactApp} />
        </Switch>
      </Router>
    </>
  );
};
export default App;

/* import WishOne from "./StateEx/WishOne"; */
/* import Counter from "./StateEx/Counter"; */
/* import Message from "./components/Message/Message";
 */
/* import Login from "./FormHandling/Login";
 */
/* import BootStrapLoginForm from "./FormHandling/BootStrapLoginForm"; */
/* import ContactTable from "./TableData/ContactTable";
import Signin from "./components/Signin/Signin"; */
