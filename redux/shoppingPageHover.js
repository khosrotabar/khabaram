import { createSlice } from "@reduxjs/toolkit";

const shoppingPageHover = createSlice({
  name: "shoppingPageHover",
  initialState: [false],
  reducers: {
    changeCond: (state, action) => {
      state[0] = action.payload;
    },
  },
});

export const { changeCond } = shoppingPageHover.actions;

export default shoppingPageHover.reducer;
