import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSwiper: true,
  values: { betamount: "" },
  stopAutoBet: false,
  slideStatusData: {},
  //
  isboardControl: true,
  combinedData: [],
  multiplier: 1,
};

const slideGameSlice = createSlice({
  name: "slideGame",
  initialState,
  reducers: {
    setIsSwiper: (state, action) => {
      state.isSwiper = action.payload;
    },
    setValues: (state, action) => {
      state.values = action.payload;
    },
    setStopAutoBet(state, action) {
      state.stopAutoBet = action.payload;
    },
    BoardControlModel: (state, action) => {
      state.isboardControl = action.payload;
    },
    setSlideStatusData: (state, action) => {
      state.slideStatusData = action.payload;
    },
    setCombinedData(state, action) {
      state.combinedData = action.payload;
    },
    setMultiplier(state, action) {
      state.multiplier = action.payload;
    },
  },
});

export const { setIsSwiper, setValues, setStopAutoBet, setSlideStatusData, setCombinedData, setMultiplier, BoardControlModel } = slideGameSlice.actions;

export default slideGameSlice.reducer;
