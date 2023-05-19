import { createSlice } from "@reduxjs/toolkit";

const mongodbStore = createSlice({
  name: "mongodbStore",
  initialState: [],
  reducers: {
    storeDatabase: (state, action) => {
      const newDatabaseProducts = action.payload.payload;

      state.push(newDatabaseProducts);
    },
  },
});

export const { storeDatabase } = mongodbStore.actions;

export default mongodbStore.reducer;
