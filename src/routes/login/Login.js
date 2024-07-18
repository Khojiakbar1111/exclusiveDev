import React from "react";
import "./login.css";
import contactImg from "../../components/assets/signup/contactImg.png";

const Login = () => {
  return (
    <div className="login">
      <div className="login-left">
        <img src={contactImg} alt="" />
      </div>
      <div className="login-right">
        <h1>Login in to Exculsive</h1>
        <span>Enter your details below</span>
        <form>
          <input type="text" placeholder="Email or Phone Number" />
          <input type="password" placeholder="Password" />
          <div className="sign-btns">
            <button className="login-login">Log in</button>
            <button className="login-forgot">Forgot Password?</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
