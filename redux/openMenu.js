import { createSlice } from "@reduxjs/toolkit";

const openMenu = createSlice({
  name: "openMenu",
  initialState: [false],
  reducers: {
    openMenuHandler: (state, action) => {
      state[0] = action.payload;
    },
  },
});

export const { openMenuHandler } = openMenu.actions;

export default openMenu.reducer;
