import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mineValue: {
    betamount: "",
    mines: 1,
  },
  bettingStatus: "",
};

const minesGameSlice = createSlice({
  name: "minesGame",
  initialState,
  reducers: {
    setMineValue(state, action) {
      state.mineValue = action.payload;
    },
    setBettingStatus(state, action) {
      state.bettingStatus = action.payload;
    },
  },
});

export const { setMineValue, setBettingStatus } = minesGameSlice.actions;

export default minesGameSlice.reducer;
