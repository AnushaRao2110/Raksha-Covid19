import React from "react";
import "../styles.css";
// import { API } from "../backend";
import Base from "./Base";

const Home = () => {
  console.log("API is http://localhost:5000/api/");
  return (
    <Base msg="Home page">
      <h1>Welcome to Home Component</h1>
    </Base>
  );
};

export default Home;

// Whenever there is a curly brace in function return keyword is necessary
