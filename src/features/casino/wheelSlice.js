import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wheelValue: {
    betamount: 0,
    mines: 1,
  },
};

const WheelGameSlice = createSlice({
  name: "wheelGame",
  initialState,
  reducers: {
    setWheelValue(state, action) {
      state.wheelValue = action.payload;
    },
  },
});

export const { setMineValue } = WheelGameSlice.actions;

export default WheelGameSlice.reducer;
