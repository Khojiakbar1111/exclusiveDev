import { Link } from "react-router-dom";
import "./cart.css";
import { FaXmark, FaSortUp, FaSortDown } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  removeFromCart,
  updateCartItemQuantity,
} from "../../components/redux/slices/dataCart";

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const deleteItems = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleRemoveCart = () => {
    dispatch(clearCart());
  };

  const increment = (id) => {
    dispatch(updateCartItemQuantity({ id, quantity: 1 }));
  };

  const decrement = (id) => {
    dispatch(updateCartItemQuantity({ id, quantity: -1 }));
  };

  return (
    <div className="parent-cart">
      {cartItems.length === 0 ? (
        <div className="checking">
          <h1>There are no items in your cart yet</h1>
          <Link to={"/"}>Back home</Link>
        </div>
      ) : (
        <div className="cart-box">
          <div className="cart-info">
            <p>Product</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Subtotal</p>
          </div>
          {cartItems.map((item) => {
            return (
              <div className="cart" key={item.id}>
                <button
                  onClick={() => deleteItems(item.id)}
                  className="cart-delete"
                >
                  <FaXmark />
                </button>
                <div className="cart-img">
                  <img src={item.image} alt={item.name} />
                  <p>{item.name}</p>
                </div>
                <p>${item.price}</p>
                <div className="cart-plus_minus">
                  <span>{item.quantity}</span>
                  <div className="cart-btns_btn">
                    <button onClick={() => increment(item.id)}>
                      <FaSortUp />
                    </button>
                    <button onClick={() => decrement(item.id)}>
                      <FaSortDown />
                    </button>
                  </div>
                </div>
                <p>${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            );
          })}
          <div className="cart-btns">
            <button onClick={handleRemoveCart}>Return To Shop</button>
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
                <p>
                  $
                  {cartItems
                    .reduce(
                      (total, item) => total + item.price * item.quantity,
                      0
                    )
                    .toFixed(2)}
                </p>
              </div>
              <div className="cart-total_sub">
                <p>Shipping:</p>
                <p>Free</p>
              </div>
              <div className="cart-totaly_sub">
                <p>Total: </p>
                <p>
                  $
                  {cartItems
                    .reduce(
                      (total, item) => total + item.price * item.quantity,
                      0
                    )
                    .toFixed(2)}
                </p>
              </div>
              <button>Proceed to checkout</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
