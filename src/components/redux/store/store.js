import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "../slices/dataSlice";
import cartReducer from "../slices/dataCart";

export const store = configureStore({
  reducer: {
    data: dataReducer,
    cart: cartReducer,
  },
});
