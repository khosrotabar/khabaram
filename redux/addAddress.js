import { createSlice } from "@reduxjs/toolkit";

const addAddress = createSlice({
  name: "addAddress",
  initialState: [[]],
  reducers: {
    storeAddressess: (state, action) => {
      state[0] = action.payload;
    },
  },
});

export const { storeAddressess } = addAddress.actions;

export default addAddress.reducer;
