import React, { useState } from 'react';
import Base from '../core/Base';
import { Link, Redirect } from 'react-router-dom';

import { signin, authenticate, isAutheticated } from "../auth/helper";

const SignIn = () => {

  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    didRedirect: false,
    success: false
  });

  const { email, password, error, loading, didRedirect, success } = values;
  const { user } = isAutheticated();

  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = event => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    signin({ email, password })
      .then(data => {
        if (data.error) {
          setValues({ ...values, error: data.error, loading: false, success: false });
        } else {
          authenticate(data, () => {
            setValues({
              ...values,
              didRedirect: true,
              success: true
            });
            setTimeout(() => {
              window.location = '/';
            }, 400);
          });
        }
      })
      .catch(console.log("signin request failed"));
  };

  const successMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-success"
            style={{ display: success ? "" : "none" }}
          >
            Login successful.
          </div>
        </div>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
          >
            {error}
          </div>
        </div>
      </div>
    );
  };

  const signInForm = () => {
    return (
      <div className="login-clean">
        <form method>
          {/* <h2 className="sr-only">Login Form</h2> */}
          <div className="illustration"><i className="fa fa-users"></i>
            <h1>Login Here</h1>
          </div>
          <div className="form-group"><select className="form-control"><option disabled>Login As</option><option value="1">Hospital</option><option value="2">Supplier</option></select></div>
          <div className="form-group"><input className="form-control" onChange={handleChange("email")} type="email" name="email" placeholder="Email" value={email} /></div>
          <div className="form-group"><input className="form-control" onChange={handleChange("password")} type="password" name="password" placeholder="Password" value={password} /></div>
          <div className="form-group"><button className="btn btn-primary btn-block" type="submit" onClick={onSubmit}>Log In</button></div><a className="forgot" href="#">Forgot your email or password?</a><a className="forgot my-2" href="#">New User ? Sign Up</a></form>
      </div>
    )
  }
  return (
    <Base msg="Login page">
      {successMessage()}
      {errorMessage()}
      {signInForm()}
    </Base>
  )
}

export default SignIn;