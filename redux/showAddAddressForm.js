import { createSlice } from "@reduxjs/toolkit";

const showAddAddressForm = createSlice({
  name: "showAddAddressForm",
  initialState: [false],
  reducers: {
    changeCond: (state, action) => {
      state[0] = action.payload;
    },
  },
});

export const { changeCond } = showAddAddressForm.actions;

export default showAddAddressForm.reducer;
