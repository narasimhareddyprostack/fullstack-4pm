import React, { Component } from "react";
import Axios from "axios";

import ContactList from "./ContactList";

class ContactApp extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [],
      errMessage: null,
    };
  }
  componentDidMount() {
    Axios.get(
      "https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist"
    )
      .then((response) => {
        this.setState({ contacts: response.data });
      })
      .catch(() => {});
  }
  componentWillUnmount() {
    console.log("Willunmount method");
  }
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <ContactList contacts={this.state.contacts} />
            </div>
            <div className="col-md-4"></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ContactApp;
