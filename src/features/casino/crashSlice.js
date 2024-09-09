import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSwiper: true,
  isboardControl: true,
  crashValues: {},
  gameStatusData: {},
  xValue: "",
  bettingStatus: "",
  crashStatus: "",
  combinedData: [],
  multiplier: 0,
};

const crashGameSlice = createSlice({
  name: "crashGame",
  initialState,
  reducers: {
    SwiperModel: (state, action) => {
      state.isSwiper = action.payload;
    },
    BoardControlModel: (state, action) => {
      state.isboardControl = action.payload;
    },
    setCrashValues(state, action) {
      state.crashValues = action.payload;
    },
    setGameStatusData(state, action) {
      state.gameStatusData = action.payload;
    },
    setXValue(state, action) {
      state.xValue = action.payload;
    },
    setBettingStatus(state, action) {
      state.bettingStatus = action.payload;
    },
    setCrashStatus(state, action) {
      state.crashStatus = action.payload;
    },
    setCombinedData(state, action) {
      state.combinedData = action.payload;
    },
    setMultiplier(state, action) {
      state.multiplier = action.payload;
    },
  },
});

export const {
  SwiperModel,
  BoardControlModel,
  setCrashValues,
  setGameStatusData,
  setXValue,
  setBettingStatus,
  setCrashStatus,
  setCombinedData,
  setMultiplier,
} = crashGameSlice.actions;

export default crashGameSlice.reducer;
