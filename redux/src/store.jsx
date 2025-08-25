import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "./counterSlice";  // counter slice ko import karna hai
import productReducer from './ProductSlice'
const store = configureStore({
  reducer: {
    // counter: counterReducer,
    products: productReducer
  },
});

export default store;
