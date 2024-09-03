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
import Wishlist from "./routes/wishlist/Wishlist";
import Admin from "./routes/admin/Admin";
import { useLocation } from "react-router-dom";

function App() {
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );

  const [userAcc, setUserAcc] = useState(false);

  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const [like, setLike] = useState(
    JSON.parse(localStorage.getItem("like")) || []
  );

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("like", JSON.stringify(like));
  }, [like]);

  const addUsers = (user) => {
    setUsers((prev) => [...prev, user]);
  };

  // const addToCart = (product) => {
  //   const updateCart = [...cart, { ...product, count: 1 }];
  //   localStorage.setItem("cart", JSON.stringify(updateCart));
  //   setCart(updateCart);
  //   alert("A product has been added successfully");
  // };

  const addToLike = (product) => {
    const updateLike = [...like, { ...product, count: 1 }];
    localStorage.setItem("like", JSON.stringify(updateLike));
    setLike(updateLike);
    alert("Like");
  };

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="App">
      <Header />
      <Navbar userAcc={userAcc} />
      {/* <BreadCrumbs /> */}
      <Routes>
        <Route path="/" element={<Home addToLike={addToLike} />} />
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
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
