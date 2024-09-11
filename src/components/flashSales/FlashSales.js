import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/slices/dataSlice";
import { addToCart } from "../redux/slices/dataCart";
import { toggleWishlist } from "../redux/slices/dataWishlist"; // Use toggle action
import CountdownTimer from "../timerDown/TimerDown";
import { Link } from "react-router-dom";
import "./flashSales.css";
import FetchError from "../fetchError/FetchError";
import { ToastContainer } from "react-toastify";

const FlashSales = () => {
  const dispatch = useDispatch();
  const { dataJson, isLoading, isError } = useSelector((state) => state.data);
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems); // Access wishlist items

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  const handleToggleWishlist = (item) => {
    dispatch(toggleWishlist(item));
  };

  const isItemInWishlist = (itemId) => {
    return wishlistItems.some((item) => item.id === itemId);
  };

  const targetDate = new Date("2024-10-31T10:00:00");

  return (
    <section className="flashSales">
      <ToastContainer />
      <div className="flashSales-category">
        <div className="flash-box"></div>
        <h1>Today's</h1>
      </div>
      <div className="flashSales-info">
        <CountdownTimer targetDate={targetDate} />
        <div className="flashSales-buttons">
          <button>
            <i className="fa-solid fa-left-long"></i>
          </button>
          <button>
            <i className="fa-solid fa-right-long"></i>
          </button>
        </div>
      </div>
      <div className="flashSales-section">
        {isError && <FetchError />}
        {dataJson &&
          dataJson
            .filter((item) => item.category === "flashSales")
            .map((item) => (
              <div className="flashSales-cart" key={item.id}>
                <div className="flashSales-overlay">
                  <div className="flashSales-icons">
                    <div className="flashSales-discount">-{item.discount}%</div>
                    <div className="flash-btns">
                      <button
                        className={`flash-like ${
                          isItemInWishlist(item.id) ? "liked" : ""
                        }`}
                        onClick={() => handleToggleWishlist(item)}
                      >
                        <i
                          className={`fa-heart ${
                            isItemInWishlist(item.id)
                              ? "fa-solid fa-heart red-heart"
                              : "fa-regular fa-heart"
                          }`}
                        ></i>
                      </button>
                      <button className="flash-detail">
                        <i className="fa-regular fa-eye"></i>
                      </button>
                    </div>
                  </div>
                  <div className="cart-img">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <button
                    className="addToCart"
                    onClick={() => handleAddToCart(item)}
                  >
                    Add To Cart
                  </button>
                </div>
                <h3>{item.name}</h3>
                <p>
                  <span>${item.price}</span>
                </p>
              </div>
            ))}
      </div>
      <button className="flashSales-allPro">
        <Link style={{ color: "white" }} to="/allproduct">
          View All Products
        </Link>
      </button>
    </section>
  );
};

export default FlashSales;
