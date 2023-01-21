import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/img/logo.png";

const SignForm = () => {
  return (
    <div className="signin-form">
      <div className="form">
        <Link to={"/"}>
          <img src={logo} alt="logo" />
        </Link>
        <input type="text" placeholder="Login" />
        <input type="password" placeholder="Password" />
        <button className="btn submit-btn">Kiriw</button>
      </div>
    </div>
  );
};

export default SignForm;
