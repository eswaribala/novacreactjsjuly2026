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
      const existingItem = state.items.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      state.items = state.items.filter((i) => i.id !== itemId);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlicer.actions;
export default cartSlicer.reducer;
    