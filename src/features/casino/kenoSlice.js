import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSwiper: true,
  values: { betamount: "", risk: "medium" },
  selectTile: [],
  kenoStatusData: {},
  stopAutoBet: false,
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
  },
});

export const { setSelectTile, setIsSwiper, setValues, setKenoStatusData, setStopAutoBet } = kenoGameSlice.actions;

export default kenoGameSlice.reducer;
