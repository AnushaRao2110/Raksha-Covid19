import React from "react";
import { Link, withRouter } from "react-router-dom";

const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#1d4177" };
  } else {
    return { color: "#121314" };
  }
};

const Navbar = ({history}) => {
  return (
    <nav className="navbar navbar-light navbar-expand-lg">
      <div className="container-fluid">
        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav ml-auto">
            <li className="nav-item">
              <Link style={currentTab(history,'/')} className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link style={currentTab(history,'/signin')} className="nav-link" to="/signin">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link style={currentTab(history,'/signup')} className="nav-link" to="/signup">
                SignUp
              </Link>
            </li>
            <li className="nav-item">
              <Link style={currentTab(history,'/signout')} className="nav-link" to="/signout">
                Signout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);

// Whenever there is a curly brace in function return keyword is necessary
