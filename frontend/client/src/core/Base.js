import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Base = ({ children }) => {
  console.log("API is http://localhost:5000/api/");
  return (
    <div>
      <Navbar />
      <div className="container-fluid">
        <div>{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Base;
