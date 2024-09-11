import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearWishlist,
  removeFromWishlist,
} from "../../components/redux/slices/dataWishlist";
import "./wishlist.css";
import { BsTrash } from "react-icons/bs";
import { addToCart } from "../../components/redux/slices/dataCart";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function Wishlist() {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);

  const handleRemoveItem = (id) => {
    dispatch(removeFromWishlist(id));
  };

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  const handleRemoveWishlist = () => {
    dispatch(clearWishlist());
  };

  return (
    <>
      {!wishlistItems.length ? (
        <div className="checking">
          <h1>There are no items in your wishlist yet</h1>
          <Link to={"/"}>Back home</Link>
        </div>
      ) : (
        <div className="wishlist">
          <ToastContainer />
          <div className="title">
            <h1>Wishlist ({wishlistItems.length})</h1>
            <button onClick={() => handleRemoveWishlist()}>
              Move All to Bag
            </button>
          </div>
          <div className="wishlist-box">
            {wishlistItems.map((item) => {
              return (
                <div className="wishlist-cart" key={item.id}>
                  <div className="wishlist-overlay">
                    <div className="flashSales-icons">
                      <div className="flashSales-discount">
                        -{item.discount}%
                      </div>
                      <div className="flash-btns">
                        <button
                          className="flash-detail"
                          onClick={() => handleRemoveItem(item.id)}
                        >
                          <BsTrash />
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
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default Wishlist;
