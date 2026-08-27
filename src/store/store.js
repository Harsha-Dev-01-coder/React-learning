import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./slices/counterSlice";
import cartReducer from "./slices/cartSlice";
import authReducer from "./slices/authSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
    auth: authReducer
  }
});