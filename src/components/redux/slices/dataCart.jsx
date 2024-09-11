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
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      if (!existingItem) {
        state.cartItems.push({ ...newItem, quantity: 1 }); // Initialize with quantity 1
        localStorage.setItem("cart", JSON.stringify(state.cartItems));
        toast.success("A product has been added to cart", { autoClose: 2400 });
      } else {
        toast.info("This product has already been added", { autoClose: 2400 });
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
    updateCartItemQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.cartItems.find((item) => item.id === id);
      if (item) {
        item.quantity = Math.max(1, item.quantity + quantity); // Ensure quantity doesn't go below 1
        localStorage.setItem("cart", JSON.stringify(state.cartItems));
      }
    },
  },
});

export const { addToCart, removeFromCart, clearCart, updateCartItemQuantity } =
  dataCartSlice.actions;

export default dataCartSlice.reducer;
