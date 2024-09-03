import { useEffect, useState } from "react";
import "./cart.css";
import axios from "axios";
import { FaXmark } from "react-icons/fa6";

function Cart() {
  const [cartData, setCartData] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3000/cart")
  //     .then((response) => setCartData(response.data));
  // }, []);

  const onDelete = (id) => {
    const deletedData = cartData.filter((item) => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(deletedData));
    setCartData(deletedData);
  };

  return (
    <div className="parent-cart">
      {cartData.length === 0 ? (
        <h1>There is no cart in your cart</h1>
      ) : (
        <div className="cart-box">
          <div className="cart-info">
            <p>Product</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Subtotal</p>
          </div>
          {cartData.map((item) => {
            return (
              <div className="cart" key={item.id}>
                <button
                  onClick={() => onDelete(item.id)}
                  className="cart-delete"
                >
                  <FaXmark />
                </button>
                <div className="cart-img">
                  <img src={item.image} alt={item.name} />
                  <p>{item.name}</p>
                </div>
                <p>${item.price}</p>
                <input type="number" placeholder="01" />
                <p>${item.price}</p>
              </div>
            );
          })}
          <div className="cart-btns">
            <button>Return To Shop</button>
            <button>Update Cart</button>
          </div>
          <div className="cart-total_box">
            <div className="cart-btns_coupon">
              <button>Coupon Code</button>
              <button>Apply Coupon</button>
            </div>
            <div className="cart-total">
              <h1>Cart Total</h1>
              <div className="cart-total_sub">
                <p>Subtotal:</p>
                <p>$1750</p>
              </div>
              <div className="cart-total_sub">
                <p>Shipping:</p>
                <p>Free</p>
              </div>
              <div className="cart-totaly_sub">
                <p>Total: </p>
                <p>$1750</p>
              </div>
              <button>Procees to checkout</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
