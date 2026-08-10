//configure redux store
import { configureStore } from '@reduxjs/toolkit';
import productReducer from './features/products/productSlicer.js';
import cartReducer from './features/carts/cartSlicer.js';
const store = configureStore({
    reducer: {
        products: productReducer,
        cart: cartReducer, // Assuming you have a cartReducer for cart state management
    }
});

export default store;
