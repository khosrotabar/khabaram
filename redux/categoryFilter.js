import { createSlice } from "@reduxjs/toolkit";

const categoryFilter = createSlice({
  name: "categoryFilter",
  initialState: [
    {
      brand: "asayesh",
    },
    {
      priceFrom: 13000000,
      priceTo: 45000000,
    },
    {
      stock: 1,
    },
    {
      upSideFilter: "newer",
    },
  ],
  reducers: {
    changeBrand: (state, action) => {
      const newBrand = {
        brand: action.payload.brand,
      };
      state.splice(0, 1, newBrand);
    },
    changePrice: (state, action) => {
      const newPrice = {
        priceFrom: action.payload.priceFrom,
        priceTo: action.payload.priceTo,
      };
      state.splice(1, 1, newPrice);
    },
    changeStock: (state, action) => {
      const newStockCondition = {
        stock: action.payload.stock,
      };
      state.splice(2, 1, newStockCondition);
    },
    upSideFilter: (state, action) => {
      const newUpSideFilter = {
        upSideFilter: action.payload.upSideFilter,
      };
      state.splice(3, 1, newUpSideFilter);
    },
  },
});

export const { changeBrand, changePrice, changeStock, upSideFilter } =
  categoryFilter.actions;

export default categoryFilter.reducer;
