import React, { useState, useEffect } from "react";
import "./navbar.css";
import { Link, useLocation } from "react-router-dom";
import { FaUser, FaRegCircleXmark } from "react-icons/fa6";
import { IoIosStarOutline } from "react-icons/io";
import { BiLogOut } from "react-icons/bi";
import { FiShoppingBag } from "react-icons/fi";
import { useSelector } from "react-redux";

const Navbar = ({ userAcc }) => {
  const user = JSON.parse(localStorage.getItem("users")) || [];

  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);
  const [isMobile, setIsMobile] = useState(false);
  const [account, setAccount] = useState(false);

  const wishlistCount = useSelector((state) => state.wishlist.wishlistItems);
  const cartCount = useSelector((state) => state.cart.cartItems);

  const handleMobileBtnClick = () => {
    setIsMobile(!isMobile);
  };

  const handleLinkClick = (path) => {
    setActiveLink(path);
    setIsMobile(false);
  };

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  const onAccountHandle = () => {
    setAccount(!account);
  };

  const onCLoseUser = () => {
    setAccount(false);
  };

  return (
    <nav>
      <Link className="nav_logo" to="/" onClick={() => handleLinkClick("/")}>
        Exclusive
      </Link>
      <ul className={isMobile ? "nav_links active" : "nav_links"}>
        <button className="close-menu" onClick={handleMobileBtnClick}>
          <i className="fa-solid fa-xmark"></i>
        </button>
        <li>
          <Link
            to="/"
            className={activeLink === "/" ? "active" : ""}
            onClick={() => handleLinkClick("/")}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={activeLink === "/about" ? "active" : ""}
            onClick={() => handleLinkClick("/about")}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={activeLink === "/contact" ? "active" : ""}
            onClick={() => handleLinkClick("/contact")}
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            to="/signup"
            className={activeLink === "/signup" ? "active" : ""}
            onClick={() => handleLinkClick("/signup")}
          >
            Sign Up
          </Link>
        </li>
      </ul>
      <div className="nav_btn">
        <div className="nav_search">
          <input type="text" placeholder="What are you looking for?" />
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>

        {location.pathname === "/signup" || location.pathname === "/login" || (
          <>
            <div className="wishlistCount">
              <span>{wishlistCount.length}</span>
            </div>
            <Link to="/wishlist">
              <i className="fa-regular fa-heart"></i>
            </Link>
          </>
        )}
        {location.pathname === "/signup" || location.pathname === "/login" || (
          <>
            <div className="cartCount">
              <span>{cartCount.length}</span>
            </div>
            <Link to="/cart">
              <i className="fa-solid fa-cart-shopping"></i>
            </Link>
          </>
        )}

        <button className="mobile_btn" onClick={handleMobileBtnClick}>
          <i
            className={isMobile ? "fa-solid fa-xmark" : "fa-solid fa-bars"}
          ></i>
        </button>
        {user.length !== 0 && (
          <div className="user-acc_box">
            <button className="user-acc" onClick={onAccountHandle}>
              <FaUser />
            </button>
            {account && (
              <ul className="user-info">
                <li>
                  <FaUser className="user-acc_icons" />
                  <Link onClick={onCLoseUser} to="/account">
                    Manage My Account
                  </Link>
                </li>
                <li>
                  <FiShoppingBag className="user-acc_icons" />
                  <Link onClick={onCLoseUser} to="/myoffer">
                    {" "}
                    My Offer
                  </Link>
                </li>
                <li>
                  <FaRegCircleXmark className="user-acc_icons" />
                  <Link onClick={onCLoseUser} to="/mycancellation">
                    {" "}
                    My Cancenllations
                  </Link>
                </li>
                <li>
                  <IoIosStarOutline className="user-acc_icons" />
                  <Link onClick={onCLoseUser} to="/myreview">
                    My Reviews
                  </Link>
                </li>
                <li>
                  <BiLogOut className="user-acc_icons" />
                  <Link onClick={onCLoseUser} to="/mylogout">
                    Logout
                  </Link>
                </li>
              </ul>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
