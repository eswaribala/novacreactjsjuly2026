//configure redux store
import { configureStore } from '@reduxjs/toolkit';
import productReducer from './features/products/productSlicer.js';
const store = configureStore({
    reducer: {
        products: productReducer
    }
});

export default store;
