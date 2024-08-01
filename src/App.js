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
import Account from "./routes/account/Account";
import MyProfile from "./components/myProfile/MyProfile";
import PageNotFound from "./routes/pageNotFound/PageNotFound";
import Cart from "./routes/cart/Cart";
// import BreadCrumbs from "./components/breadCrumbs/BreadCrumbs";

function App() {
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );

  const [userAcc, setUserAcc] = useState(false);

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
      {/* <BreadCrumbs /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setUserAcc={setUserAcc} />} />
        <Route
          path="/signup"
          element={<SignUp addUsers={addUsers} userAcc={userAcc} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/account" element={<Account />}>
          <Route index element={<MyProfile />} />
          <Route path="myprofile" element={<MyProfile />} />
          {/* Add other nested routes here */}
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
