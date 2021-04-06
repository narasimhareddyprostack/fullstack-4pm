import React from "react";
import { Link } from "react-router-dom";
let Navbar = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/home">
            React Router Example
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/contacts"
                >
                  Contacts
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contactdata">
                  Contact Data - Axios
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contactapp">
                  Contact App
                </Link>
              </li>
            </ul>
            {employee.name}
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};
export default Navbar;
