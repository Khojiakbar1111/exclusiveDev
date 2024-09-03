import { useState } from "react";
import "./wishlist.css";

import { BsTrash } from "react-icons/bs";

function Wishlist() {
  const [wishlist, setWishlist] = useState(
    JSON.parse(localStorage.getItem("like")) || []
  );

  return (
    <>
      {!wishlist.length ? (
        <h1>You do not have liked product yet</h1>
      ) : (
        <div className="wishlist">
          <div className="title">
            <h1>Wishlist(4)</h1>
            <button>Move All to Bag</button>
          </div>
          <div className="wishlist-box">
            {wishlist.map((item) => {
              return (
                <div className="wishlist-cart" key={item.id}>
                  <div className="wishlist-overlay">
                    <div className="flashSales-icons">
                      <div className="flashSales-discount">
                        -{item.discount}%
                      </div>
                      <div className="flash-btns">
                        <button className="flash-detail">
                          <BsTrash />
                        </button>
                      </div>
                    </div>
                    <div className="cart-img">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <button className="addToCart">Add To Cart</button>
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
