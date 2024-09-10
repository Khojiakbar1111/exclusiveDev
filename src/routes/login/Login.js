import React, { useState } from "react";
import "./login.css";
import contactImg from "../../components/assets/signup/contactImg.png";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = ({ setUserAcc }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const resetInputs = () => {
    setEmail("");
    setPassword("");
  };

  const validateUser = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (email !== "" && password !== "") {
      const user = users.find(
        (item) =>
          item.phoneNumber === email ||
          (item.email === email && item.password === password)
      );
      if (user) {
        toast.success("Login successful", {
          autoClose: 2000,
          onClose: () => navigate("/"), // Navigate after showing the toast
        });
        setUserAcc(true);
      } else {
        toast.error("User is not defined", {
          autoClose: 2000,
        });
        resetInputs();
      }
    } else {
      toast.info("Please fill all fields", {
        autoClose: 2000,
      });
    }
  };

  return (
    <>
      <div className="login">
        <div className="login-left">
          <img src={contactImg} alt="Contact" />
        </div>
        <div className="login-right">
          <h1>Login in to Exclusive</h1>
          <span>Enter your details below</span>
          <form onSubmit={validateUser}>
            <input
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Email or Phone Number"
              value={email}
            />
            <input
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              value={password}
            />
            <div className="login-btns">
              <button type="submit" className="login-login">
                Log in
              </button>
              <button type="button" className="login-forgot">
                Forgot Password?
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Login;
