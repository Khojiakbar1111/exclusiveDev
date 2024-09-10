import React, { useRef } from "react";
import "./signUp.css";
import contactImg from "../../components/assets/signup/contactImg.png";
import contactIconImg from "../../components/assets/signup/Icon-Google.png";
import { v4 as uuidv4 } from "uuid";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const SignUp = ({ addUsers }) => {
  const navigate = useNavigate();

  const firstNameRef = useRef();
  const phoneNumberRef = useRef();
  const passwordRef = useRef();
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const firstName = firstNameRef.current.value;
    const phoneNumber = phoneNumberRef.current.value;
    const password = passwordRef.current.value;

    if (firstName && phoneNumber && password) {
      const newUser = {
        id: uuidv4(),
        firstName,
        phoneNumber,
        password,
      };

      addUsers(newUser);
      toast.success("User has been registered");
      formRef.current.reset();
      navigate("/login");
    } else {
      toast.info("Please fill all fields", {
        autoClose: 2000,
      });
    }
  };

  return (
    <>
      <div className="signup">
        <div className="signup-left">
          <img src={contactImg} alt="Contact" />
        </div>
        <div className="signup-right">
          <h1>Create an account</h1>
          <span>Enter your details below</span>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input ref={firstNameRef} type="text" placeholder="Name" />
            <input
              ref={phoneNumberRef}
              type="text"
              placeholder="Email or Phone Number"
            />
            <input ref={passwordRef} type="password" placeholder="Password" />
            <div className="sign-btns">
              <button className="signup-login" type="submit">
                Create Account
              </button>
              <button className="signup-forgot" type="button">
                <img src={contactIconImg} alt="Google" /> Sign with Google
              </button>
              <span>
                Already have account? <Link to="/login">Log in</Link>
              </span>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default SignUp;
