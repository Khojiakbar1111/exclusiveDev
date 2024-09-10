// redux/slices/dataCart.js
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItems: JSON.parse(localStorage.getItem("cart")) || [],
};

const dataCartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      if (!state.cartItems.find((item) => item.id === newItem.id)) {
        state.cartItems.push(newItem);
        localStorage.setItem("cart", JSON.stringify(state.cartItems));
        toast.success("A product has been added to cart", {
          autoClose: 2400,
        });
      } else {
        toast.info("This product had already been added ", {
          autoClose: 2400,
        });
      }
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    clearCart: (state) => {
      state.cartItems = [];
      localStorage.removeItem("cart");
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = dataCartSlice.actions;

export default dataCartSlice.reducer;
