import { createSlice } from "@reduxjs/toolkit";

const addresses = createSlice({
  name: "addresses",
  initialState: [],
  reducers: {
    storeAddress: (state, action) => {
      let checkSameAddress;

      for (var i = 0; i < state.length; i++) {
        checkSameAddress = state.find(
          (item) => item.address === action.payload.address
        );
      }

      if (!checkSameAddress) {
        state.push(action.payload);
      }
    },
    removeAddress: (state, action) => {
      return state.filter((item) => item.address !== action.payload.address);
    },
  },
});

export const { storeAddress, removeAddress } = addresses.actions;

export default addresses.reducer;
