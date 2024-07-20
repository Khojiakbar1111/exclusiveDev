import React, { useState } from "react";
import "./login.css";
import contactImg from "../../components/assets/signup/contactImg.png";
import { useNavigate } from "react-router-dom";

const Login = ({ setUserAcc }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const validateUser = () => {
    if (email !== "" && password !== "") {
      const user = users.find(
        (item) => item.phoneNumber === email && item.password === password
      );
      if (user) {
        navigate("/");
        alert("Account successful registered");
        setUserAcc(true);
      } else {
        alert("Error");
      }
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <div className="login">
      <div className="login-left">
        <img src={contactImg} alt="Contact" />
      </div>
      <div className="login-right">
        <h1>Login in to Exclusive</h1>
        <span>Enter your details below</span>
        <form>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email or Phone Number"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <div className="login-btns">
            <button
              type="button"
              className="login-login"
              onClick={validateUser}
            >
              Log in
            </button>
            <button type="button" className="login-forgot">
              Forgot Password?
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
