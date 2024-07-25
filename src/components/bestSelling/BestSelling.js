import React from "react";
import "./bestSelling.css";
import { Link } from "react-router-dom";
import best1 from "../assets/bestImg/best1.png";
import best2 from "../assets/bestImg/best2.png";
import best3 from "../assets/bestImg/best3 (2).png";
import best4 from "../assets/bestImg/best4.png";

const BestSelling = () => {
  return (
    <div className="best-selling">
      <div className="best-cate">
        <div className="cate"></div>
        <p>This month</p>
      </div>
      <div className="best-title">
        <h1>Best Selling Products</h1>
        <Link to="/viewall">View All</Link>
      </div>
      <div className="best-box">
        <div className="best-cart">
          <div className="best-overlay">
            <div className="best-icons">
              <div className="best-btns">
                <button>
                  <i className="fa-regular fa-heart"></i>
                </button>
                <button>
                  <i className="fa-regular fa-eye"></i>
                </button>
              </div>
            </div>
            <div className="best-img">
              <img src={best1} alt="image" />
            </div>
            <button className="addToCart">Add To Cart</button>
          </div>
          <h3>The north coat</h3>
          <p>
            $260 <span>$360</span>
          </p>
        </div>
        <div className="best-cart">
          <div className="best-overlay">
            <div className="best-icons">
              <div className="best-btns">
                <button>
                  <i className="fa-regular fa-heart"></i>
                </button>
                <button>
                  <i className="fa-regular fa-eye"></i>
                </button>
              </div>
            </div>
            <div className="best-img">
              <img src={best2} alt="image" />
            </div>
            <button className="addToCart">Add To Cart</button>
          </div>
          <h3>The north coat</h3>
          <p>
            $260 <span>$360</span>
          </p>
        </div>
        <div className="best-cart">
          <div className="best-overlay">
            <div className="best-icons">
              <div className="best-btns">
                <button>
                  <i className="fa-regular fa-heart"></i>
                </button>
                <button>
                  <i className="fa-regular fa-eye"></i>
                </button>
              </div>
            </div>
            <div className="best-img">
              <img src={best3} alt="image" />
            </div>
            <button className="addToCart">Add To Cart</button>
          </div>
          <h3>The north coat</h3>
          <p>
            $260 <span>$360</span>
          </p>
        </div>
        <div className="best-cart">
          <div className="best-overlay">
            <div className="best-icons">
              <div className="best-btns">
                <button>
                  <i className="fa-regular fa-heart"></i>
                </button>
                <button>
                  <i className="fa-regular fa-eye"></i>
                </button>
              </div>
            </div>
            <div className="best-img">
              <img src={best4} alt="image" />
            </div>
            <button className="addToCart">Add To Cart</button>
          </div>
          <h3>The north coat</h3>
          <p>
            $260 <span>$360</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BestSelling;

{
  /* <div className="flashSales-cart">
          <div className="flashSales-overlay">
            <div className="best-icons">
              <div className="best-btns">
                <button>
                  <i className="fa-regular fa-heart"></i>
                </button>
                <button>
                  <i className="fa-regular fa-eye"></i>
                </button>
              </div>
            </div>
            <div className="cart-img">
              <img src={best2} alt="image" />
            </div>
            <button className="addToCart">Add To Cart</button>
          </div>
          <h3>The north coat</h3>
          <p>
            $260 <span>$360</span>
          </p>
        </div>
        <div className="flashSales-cart">
          <div className="flashSales-overlay">
            <div className="best-icons">
              <div className="best-btns">
                <button>
                  <i className="fa-regular fa-heart"></i>
                </button>
                <button>
                  <i className="fa-regular fa-eye"></i>
                </button>
              </div>
            </div>
            <div className="cart-img">
              <img src={best3} alt="image" />
            </div>
            <button className="addToCart">Add To Cart</button>
          </div>
          <h3>The north coat</h3>
          <p>
            $260 <span>$360</span>
          </p>
        </div>
        <div className="flashSales-cart">
          <div className="flashSales-overlay">
            <div className="best-icons">
              <div className="best-btns">
                <button>
                  <i className="fa-regular fa-heart"></i>
                </button>
                <button>
                  <i className="fa-regular fa-eye"></i>
                </button>
              </div>
            </div>
            <div className="cart-img">
              <img src={best4} alt="image" />
            </div>
            <button className="addToCart">Add To Cart</button>
          </div>
          <h3>The north coat</h3>
          <p>
            $260 <span>$360</span>
          </p>
        </div> */
}
