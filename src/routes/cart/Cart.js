import { useEffect, useState } from "react";
import "./cart.css";
import axios from "axios";

function Cart() {
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/cart")
      .then((response) => setCartData(response.data));
  }, []);

  return (
    <div className="parent-cart">
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
              <div className="cart-img">
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
              </div>
              <p>${item.price}</p>
              <input type="number" value="01" />
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
    </div>
  );
}

export default Cart;
