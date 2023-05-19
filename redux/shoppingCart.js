import { createSlice } from "@reduxjs/toolkit";

const shoppingCart = createSlice({
  name: "shoppingCart",
  initialState: [[]],
  reducers: {
    addProduct: (state, action) => {
      state.splice(0, 1, action.payload);
    },
  },
});

export const { addProduct } = shoppingCart.actions;

export default shoppingCart.reducer;
