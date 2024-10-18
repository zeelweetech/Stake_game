import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  values: {
    betamount: 0,
    difficulty: "medium",
  },
  showRandomField: false,
  gameBet: false,
  bettingStatus: "",
};

const dragonTowerGameSlice = createSlice({
  name: "dragonTowerGame",
  initialState,
  reducers: {
    setValues(state, action) {
      state.values = action.payload;
    },
    setBettingStatus(state, action) {
      state.bettingStatus = action.payload;
    },
    setShowRandomField(state, action) {
      state.showRandomField = action.payload;
    },
    setGameBet(state, action) {
      state.gameBet = action.payload;
    },
  },
});

export const { setValues, setBettingStatus, setShowRandomField, setGameBet } = dragonTowerGameSlice.actions;

export default dragonTowerGameSlice.reducer;
