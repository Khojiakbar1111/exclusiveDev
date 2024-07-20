import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./routes/home/Home";
import Login from "./routes/login/Login";
import SignUp from "./routes/signup/SignUp";
import About from "./routes/about/About";
import Contact from "./routes/contact/Contact";
import Checkout from "./routes/checkout/Checkout";

function App() {
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );

  const [userAcc, setUserAcc] = useState(false);

  console.log(userAcc);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const addUsers = (user) => {
    setUsers((prev) => [...prev, user]);
  };

  return (
    <div className="App">
      <Header />
      <Navbar userAcc={userAcc} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setUserAcc={setUserAcc} />} />
        <Route
          path="/signup"
          element={
            <SignUp addUsers={addUsers} users={users} setUsers={setUsers} />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
