import React, { useState } from "react";
import "./index.css";
import person from "../Assets/person.png";
import email from "../Assets/email.png";
import password from "../Assets/password.png";

const LoginSignUp = () => {
  const [action, setAction] = useState("Sign Up");
  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "login" ? (
          <div></div>
        ) : (
          <div className="input">
            <img src={person} alt="" />
            <input type="text" placeholder="Name" />
          </div>
        )}
        <div className="input">
          <img src={email} alt="" />
          <input type="email" placeholder="Your Email" />
        </div>
        <div className="input">
          <img src={password} alt="" />
          <input type="password" placeholder="Enter your password" />
        </div>
        {action === "login" ? (
          <div></div>
        ) : (
          <div className="input">
            <img src={password} alt="" />
            <input type="password" placeholder="Repeat your password" />
          </div>
        )}
      </div>
      {action === "Sign Up" ? (
        <div></div>
      ) : (
        <div className="forgot-password">
          Lost your password? <span>Click here</span>
        </div>
      )}
      <div className="submit-container">
        <div
          className={action === "login" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Sign Up");
          }}
        >
          Sign Up
        </div>
        <div
          className={action === "Sign Up" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("login");
          }}
        >
          login
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;
