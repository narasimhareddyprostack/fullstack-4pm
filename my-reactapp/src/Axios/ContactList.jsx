import React, { Component } from "react";
import Axios from "axios";
class ContactList extends Component {
  state = {
    contacts: [],
    errMessage: null,
  };
  getContactData = () => {
    Axios.get(
      "https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist"
    )
      .then((response) => {
        this.setState({ contacts: response.data });
      })
      .catch((err) => {
        this.setState({ errMessage: err });
      });
  };
  render() {
    return (
      <div>
        <button className="btn btn-primary" onClick={this.getContactData}>
          Get Contact Data
        </button>
        <pre>{JSON.stringify(this.state.contacts)}</pre>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-9">
              <table className="table table-hover table-primary">
                <thead>
                  {" "}
                  <tr>
                    <th> Name</th>

                    <th> Email</th>
                    <th> City</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.contacts.map((contact) => {
                    return (
                      <tr>
                        <td>{contact.name.first}</td>
                        <td>{contact.email}</td>
                        <td>{contact.location.city}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactList;
