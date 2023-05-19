import { createSlice } from "@reduxjs/toolkit";

const openProfile = createSlice({
  name: "openProfile",
  initialState: [false],
  reducers: {
    openProfileHandler: (state, action) => {
      state[0] = action.payload;
    },
  },
});

export const { openProfileHandler } = openProfile.actions;

export default openProfile.reducer;
