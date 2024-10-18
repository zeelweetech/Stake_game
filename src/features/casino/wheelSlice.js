import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wheelValue: {
    betamount: 0,
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

export const { setWheelValue } = WheelGameSlice.actions;

export default WheelGameSlice.reducer;
