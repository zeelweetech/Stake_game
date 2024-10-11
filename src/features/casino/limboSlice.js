import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSwiper: true,
  values: { multiplier: 2, winchance: 50 },
  limboStatusData: {},
};

const limboGameSlice = createSlice({
  name: "limboGame",
  initialState,
  reducers: {
    SwiperModel: (state, action) => {
      state.isSwiper = action.payload;
    },
    setValues: (state, action) => {
      state.values = action.payload;
    },
    setLimboStatusData: (state, action) => {
      state.limboStatusData = action.payload;
    },
  },
});

export const { SwiperModel, setValues, setLimboStatusData } =
  limboGameSlice.actions;

export default limboGameSlice.reducer;
