import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/slices/dataSlice";
import "./ourProducts.css";
import FetchError from "../fetchError/FetchError";
import { BeatLoader } from "react-spinners";
import { addToCart } from "../redux/slices/dataCart";
import { toggleWishlist } from "../redux/slices/dataWishlist";

const OurProducts = () => {
  const dispatch = useDispatch();
  const { dataJson, isLoading, isError } = useSelector((state) => state.data);

  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  const handleToggleWishlist = (item) => {
    dispatch(toggleWishlist(item));
  };

  const isItemInWishlist = (itemId) => {
    return wishlistItems.some((item) => item.id === itemId);
  };

  if (isLoading) {
    return <p>Loading...</p>;
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
        {isError && <FetchError />}
        {isLoading && <BeatLoader />}
        {dataJson &&
          dataJson
            .filter((item) => item.category === "ourProduct")
            .map((product) => (
              <div className="ourProduct-cart" key={product.id}>
                <div className="flashSales-overlay">
                  <div className="flashSales-icons">
                    <div className="flash-btns">
                      <button
                        className={`flash-like ${
                          isItemInWishlist(product.id) ? "liked" : ""
                        }`}
                        onClick={() => handleToggleWishlist(product)}
                      >
                        <i
                          className={`fa-heart ${
                            isItemInWishlist(product.id)
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
                    <img src={product.image} alt={product.name} />
                  </div>
                  <button
                    className="addToCart"
                    onClick={() => handleAddToCart(product)}
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
