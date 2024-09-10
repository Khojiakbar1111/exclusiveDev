// redux/slices/wishlistSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  wishlistItems: JSON.parse(localStorage.getItem("like")) || [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const newItem = action.payload;
      if (!state.wishlistItems.find((item) => item.id === newItem.id)) {
        state.wishlistItems.push(newItem);
        localStorage.setItem("like", JSON.stringify(state.wishlistItems));
        toast.success("A product has been added to wishlist", {
          autoClose: 2400,
        });
      } else {
        toast.info("This product has already been added", {
          autoClose: 2400,
        });
      }
    },
    removeFromWishlist: (state, action) => {
      const itemId = action.payload;
      state.wishlistItems = state.wishlistItems.filter(
        (item) => item.id !== itemId
      );
      localStorage.setItem("like", JSON.stringify(state.wishlistItems));
      toast.info("A product has been removed from wishlist", {
        autoClose: 2400,
      });
    },
    toggleWishlist: (state, action) => {
      const newItem = action.payload;
      const exists = state.wishlistItems.find((item) => item.id === newItem.id);
      if (exists) {
        state.wishlistItems = state.wishlistItems.filter(
          (item) => item.id !== newItem.id
        );
        toast.info("A product has been removed from wishlist", {
          autoClose: 2400,
        });
      } else {
        state.wishlistItems.push(newItem);
        toast.success("A product has been added to wishlist", {
          autoClose: 2400,
        });
      }
      localStorage.setItem("like", JSON.stringify(state.wishlistItems));
    },
    clearWishlist: (state) => {
      state.wishlistItems = [];
      localStorage.removeItem("like");
    },
  },
});

export const {
  addToWishlist,
  removeFromWishlist,
  toggleWishlist,
  clearWishlist,
} = wishlistSlice.actions;

export default wishlistSlice.reducer;
