import { configureStore } from "@reduxjs/toolkit";
import {cartReducer} from "./reducers/worker";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
