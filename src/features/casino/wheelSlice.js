import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wheelValue: {
    betamount: "",
    risk: "medium",
    segments: 30,
  },
  finalmultiplier: "",
  mustSpin: false,
  isSpinning: true,
  isBetInProgress: false,
  autoBet: false
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
    setMustSpin(state, action) {
      state.mustSpin = action.payload;
    },
    setIsSpinning(state, action) {
      state.isSpinning = action.payload;
    },
    setIsBetInProgress(state, action) {
      state.isBetInProgress = action.payload;
    },
    setAutoBet(state, action) {
      state.autoBet = action.payload;
    },
  },
});

export const { setWheelValue, setFinaMultiplier, setMustSpin, setIsSpinning, setIsBetInProgress, setAutoBet } =
  WheelGameSlice.actions;

export default WheelGameSlice.reducer;
