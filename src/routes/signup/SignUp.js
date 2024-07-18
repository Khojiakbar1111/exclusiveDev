import React from "react";
import "./signUp.css";
import contactImg from "../../components/assets/signup/contactImg.png";
import contactIconImg from "../../components/assets/signup/Icon-Google.png"

const SignUp = () => {
  return (
    <div className="signup">
      <div className="signup-left">
        <img src={contactImg} alt="" />
      </div>
      <div className="signup-right">
        <h1>Create an account</h1>
        <span>Enter your details below</span>
        <form>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email or Phone Number" />
          <input type="password" placeholder="Password" />
          <div className="sign-btns">
            <button className="signup-login">Create Account</button>
            <button className="signup-forgot"><img src={contactIconImg} alt="" /> Sign with Google</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
