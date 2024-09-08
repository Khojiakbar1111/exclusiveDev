import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
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
import FetchError from "./components/fetchError/FetchError";
import { fetchData } from "./components/redux/slices/dataSlice";
import { BeatLoader } from "react-spinners";
import FetchLoading from "./components/fetchLoading/FetchLoading";

function App() {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (isLoading) {
    <BeatLoader />;
  }

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

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="App">
      {isLoading && <FetchLoading />}
      <Header />
      <Navbar userAcc={userAcc} />
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
