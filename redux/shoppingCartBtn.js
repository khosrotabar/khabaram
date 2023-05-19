import { createSlice } from "@reduxjs/toolkit";

const shoppingCartBtn = createSlice({
  name: "shoppingCartBtn",
  initialState: [
    {
      initialVal: "",
      number: 1,
      code: "",
    },
  ],
  reducers: {
    changeVal: (state, action) => {
      state[0].initialVal = action.payload;
    },
    changeNumber: (state, action) => {
      state[0].number = action.payload;
    },
    saveProductCode: (state, action) => {
      state[0].code = action.payload;
    },
  },
});

export const { changeVal, changeNumber, saveProductCode } =
  shoppingCartBtn.actions;

export default shoppingCartBtn.reducer;
