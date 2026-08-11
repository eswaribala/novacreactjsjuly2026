//create slicer for add remove and clear cart items

import { createSlice } from "@reduxjs/toolkit";

const initialValues = {
  items: []
};

const cartSlicer = createSlice({
  name: "cart",
  initialState: initialValues,  
 reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
       const existingItem = state.items.find(
        (cartItem) => cartItem.productId === item.productId
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
     // console.log("removeFromCart action.payload", action.payload);
      const productId = action.payload;
      state.items = state.items.filter((item) => item.productId !== productId);
    },

    decrementFromCart: (state, action) => {
      const productId = action.payload;
      const existingItem = state.items.find(
        (cartItem) => cartItem.productId === productId
      );
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          state.items = state.items.filter((item) => item.productId !== productId);
        }
      }
    },
    incrementFromCart: (state, action) => {
      const productId = action.payload;
      const existingItem = state.items.find(
        (cartItem) => cartItem.productId === productId
      );
      if (existingItem) {
        existingItem.quantity += 1;
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, decrementFromCart, incrementFromCart, clearCart } = cartSlicer.actions;
export default cartSlicer.reducer;
    