import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "../slices/dataSlice";
import cartReducer from "../slices/dataCart";
import wishlistReducer from "../slices/dataWishlist";

export const store = configureStore({
  reducer: {
    data: dataReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
});
