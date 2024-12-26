import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSwiper: true,
  values: { betamount: "", risk: "Medium" },
  selectTile: [],
  kenoStatusData: {},
  stopAutoBet: false,
  images: Array(40).fill(null),
  revealed: Array(40).fill(false),
  zoomClass: Array(40).fill(false),
};

const kenoGameSlice = createSlice({
  name: "kenoGame",
  initialState,
  reducers: {
    setIsSwiper: (state, action) => {
      state.isSwiper = action.payload;
    },
    setValues: (state, action) => {
      state.values = action.payload;
    },
    setSelectTile(state, action) {
      state.selectTile = action.payload
    },
    setKenoStatusData: (state, action) => {
      state.kenoStatusData = action.payload;
    },
    setStopAutoBet(state, action) {
      state.stopAutoBet = action.payload;
    },
    setImages(state, action) {
      state.images = action.payload;
    },
    setRevealed(state, action) {
      state.revealed = action.payload;
    },
    setZoomClass(state, action) {
      state.zoomClass = action.payload;
    },
  },
});

export const { setSelectTile, setIsSwiper, setValues, setKenoStatusData, setStopAutoBet, setImages, setRevealed, setZoomClass } = kenoGameSlice.actions;

export default kenoGameSlice.reducer;
