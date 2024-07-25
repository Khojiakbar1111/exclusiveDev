import React, { useEffect, useState } from "react";
import "./flashSales.css";
import axios from "axios";
import gamepad from "../assets/flashSales/gamepad.png";
import keyboard from "../assets/flashSales/keyboard.png";
import tv from "../assets/flashSales/TV.png";
import chair from "../assets/flashSales/chair.png";
import { Link } from "react-router-dom";

const images = {
  "../assets/flashSales/gamepad.png": gamepad,
  "../assets/flashSales/keyboard.png": keyboard,
  "../assets/flashSales/chair.png": chair,
  "../assets/flashSales/TV.png": tv,
};

const FlashSales = () => {
  const [flashSales, setFlashSales] = useState([]);
  console.log(flashSales);

  useEffect(() => {
    axios
      .get("http://localhost:3000/data")
      .then((response) => setFlashSales(response.data));
  }, []);

  return (
    <section className="flashSales">
      <div className="flashSales-category">
        <div className="flash-box"></div>
        <h1>Today's</h1>
      </div>
      <div className="flashSales-info">
        <div className="time-content">
          <h1>Flash Sales</h1>
          <div className="time">
            <span className="text">days</span>
            <span className="number">
              32 <span>:</span>
            </span>
          </div>
          <div className="time hours">
            <span className="text">hours</span>
            <span className="number">
              10 <span>:</span>
            </span>
          </div>
          <div className="time minutes">
            <span className="text">minutes</span>
            <span className="number">
              60 <span>:</span>
            </span>
          </div>
          <div className="time seconds">
            <span className="text">seconds</span>
            <span className="number">45</span>
          </div>
        </div>
        <div className="flashSales-buttons">
          <button>
            <i className="fa-solid fa-left-long"></i>
          </button>
          <button>
            <i className="fa-solid fa-right-long"></i>
          </button>
        </div>
      </div>
      <div className="falshSales-section">
        {flashSales &&
          flashSales.map((item) => {
            return (
              <div className="flashSales-cart" key={item.id}>
                <div className="flashSales-overlay">
                  <div className="flashSales-icons">
                    <div className="flashSales-discount">-{item.discount}%</div>
                    <div className="flash-btns">
                      <button className="flash-like">
                        <i className="fa-regular fa-heart"></i>
                      </button>
                      <button className="flash-detail">
                        <i className="fa-regular fa-eye"></i>
                      </button>
                    </div>
                  </div>
                  <div className="cart-img">
                    <img src={images[item.image]} alt={item.name} />
                  </div>
                  <button className="addToCart">Add To Cart</button>
                </div>
                <h3>{item.name}</h3>
                <p>
                  ${item.discount} <span>${item.price}</span>
                </p>
              </div>
            );
          })}
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
