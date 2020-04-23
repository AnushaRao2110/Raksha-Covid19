import React from "react";
import { Link, withRouter } from "react-router-dom";
import { isAutheticated } from "../auth/helper";

const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#1d4177" };
  } else {
    return { color: "#121314" };
  }
};

const Navbar = ({ history }) => {

  return (
    <nav className="navbar navbar-light navbar-expand-lg sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand" href="#">
          <img src="/uploads/img/Untitled%20(1).png?h=f1fd0bbb372facdebb1246719ab00792" style={{ margin: '0', width: '150px' }} />
        </Link>
        <button data-toggle="collapse" className="navbar-toggler text-change" data-target="#navcol-1" >
          <span className="sr-only bg-light">Toggle navigation</span>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse" id="navcol-1">
          <ul className="nav navbar-nav ml-auto">
            <li className="nav-item" role="presentation"><Link style={currentTab(history, '/')} className="nav-link" to="/">Home</Link></li>
            <li className="nav-item" role="presentation"><Link style={currentTab(history, '/signin')} className="nav-link" to="/signin">Login</Link></li>
            <li className="nav-item" role="presentation"> <Link style={currentTab(history, '/signup')} className="nav-link" to="/signup">SignUp</Link></li>
            {isAutheticated() ? (<li className="nav-item" role="presentation"> <Link style={currentTab(history, '/signout')} className="nav-link" to="/signout">SignOut</Link></li>) : null}
            <li className="nav-item" role="presentation"><Link style={currentTab(history, '/signout')} className="nav-link" to="/signout">Contact Us</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);

// Whenever there is a curly brace in function return keyword is necessary
