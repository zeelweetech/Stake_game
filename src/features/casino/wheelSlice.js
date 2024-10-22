import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wheelValue: {
    betamount: 0,
    risk: "medium",
    segments: 30,
    finalmultiplier: "",
  },
};

const WheelGameSlice = createSlice({
  name: "wheelGame",
  initialState,
  reducers: {
    setWheelValue(state, action) {
      state.wheelValue = action.payload;
    },
    setFinaMultiplier(state, action) {
      state.finalmultiplier = action.payload;
    },
  },
});

export const { setWheelValue, setFinaMultiplier } = WheelGameSlice.actions;

export default WheelGameSlice.reducer;
