import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/slices/dataSlice";
import "./ourProducts.css";

const OurProducts = ({ addToCart }) => {
  const dispatch = useDispatch();
  const { dataJson, isLoading, isError } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error loading data. Please try again later.</p>;
  }

  return (
    <section className="ourProducts">
      <div className="best-cate">
        <div className="cate"></div>
        <p>Our Products</p>
      </div>
      <div className="best-title">
        <h1>Explore Our Products</h1>
        <div className="flashSales-buttons">
          <button>
            <i className="fa-solid fa-left-long"></i>
          </button>
          <button>
            <i className="fa-solid fa-right-long"></i>
          </button>
        </div>
      </div>
      <div className="ourProducts-box">
        {dataJson &&
          dataJson
            .filter((item) => item.category === "ourProduct")
            .map((product) => (
              <div className="ourProduct-cart" key={product.id}>
                <div className="flashSales-overlay">
                  <div className="flashSales-icons">
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
                    <img src={product.image} alt={product.name} />
                  </div>
                  <button
                    className="addToCart"
                    onClick={() => addToCart(product)}
                  >
                    Add To Cart
                  </button>
                </div>
                <h3>{product.name}</h3>
                <p>
                  ${product.price} <img src={product.starImg} alt="" />
                </p>
              </div>
            ))}
      </div>
      <button className="flashSales-allPro">View All Products</button>
    </section>
  );
};

export default OurProducts;
