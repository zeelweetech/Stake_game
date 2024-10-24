import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wheelValue: {
    betamount: 0,
    risk: "medium",
    segments: 30,
    finalmultiplier: "",
  },
  finalmultiplier: "",
  mustSpin: false,
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
  },
});

export const { setWheelValue, setFinaMultiplier, setMustSpin } =
  WheelGameSlice.actions;

export default WheelGameSlice.reducer;
