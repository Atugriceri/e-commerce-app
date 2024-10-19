import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../modules/products/slice';

const store = configureStore({
  reducer: {
    products: productReducer,
  },
});

export default store;
