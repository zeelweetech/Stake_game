import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // value: {
  //   betamount: "",
  //   rows: 1,
  //   numberofbet: "",
  //   onwin: "",
  //   onlose: ""
  // },
  mineValue: '',
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
