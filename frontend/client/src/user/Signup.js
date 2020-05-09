import React, { useState } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { signup } from "../auth/helper";

const SignUp = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    role:0,
    error: "",
    success: false,
  });

  const { name, email, password, role, error, success } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signup({ name, email, password, role })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, success: false });
        } else {
          setValues({
            ...values,
            name: "",
            email: "",
            password: "",
            role: 0,
            error: "",
            success: true,
          });
        }
      })
      .catch(console.log("Error in signup"));
  };

  const signUpForm = () => {
    return (
      <div className="login-clean">
        <form>
          {/* <h2 className="sr-only">Login Form</h2> */}
          <div className="illustration">
            <i className="fa fa-user-plus"></i>
            <h1>Register Here</h1>
          </div>
          <div className="form-group">
            <select className="form-control" 
            name="role"
            onChange={handleChange("role")}
            >
              <option disabled selected>
                Register As
              </option>
              <option value={0}>Hospital</option>
              <option value={1}>Supplier</option>
            </select>
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleChange("name")}
              value={name}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange("email")}
              value={email}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange("password")}
              value={password}
            />
          </div>
          <div className="form-group">
            <button
              className="btn btn-primary btn-block"
              type="submit"
              onClick={onSubmit}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    );
  };

  const successMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-success"
            style={{ display: success ? "" : "none" }}
          >
            New account was created successfully. Please{" "}
            <Link to="/signin">Login Here</Link>
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

  return (
    <Base msg="Signup page">
      {successMessage()}
      {errorMessage()}
      {signUpForm()}
    </Base>
  );
};

export default SignUp;
