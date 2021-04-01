import React, { Component } from "react";

class ContactList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container mt-5">
          <div className="row">
            <div className="col">
              <pre>{JSON.stringify(this.props.contacts)}</pre>
              <table className="table table-hover table-primary">
                <thead>
                  <tr>
                    <th> Name</th>
                    <th> Email</th>
                    <th> City</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.contacts.length > 0 ? (
                    <React.Fragment>
                      {this.props.contacts.map((contact) => {
                        return (
                          <tr key={contact.login.uuid}>
                            <td>{contact.name.first}</td>
                            <td>{contact.email}</td>
                            <td>{contact.location.city}</td>
                          </tr>
                        );
                      })}
                    </React.Fragment>
                  ) : null}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ContactList;
