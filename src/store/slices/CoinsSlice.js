import { createSlice } from "@reduxjs/toolkit";

const CoinsSlice = createSlice({
  name: "coins",
  initialState: {
    coins: [],
    currency: "USD",
  },
  reducers: {
    setCoins: (state, action) => {
      state.coins = action.payload;
    },
    setCurrency: (state, action) => {
      state.currency = action.payload;
    },
  },
});

export const { setCoins, setCurrency } = CoinsSlice.actions;
export default CoinsSlice.reducer;
