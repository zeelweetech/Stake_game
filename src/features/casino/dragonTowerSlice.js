import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  values: {
    betamount: 0,
    difficulty: "medium",
  },
  showRandomField: false,
  gameBet: false,
  bettingStatus: "",
  tileSelected: "",
  restor: "",
  restorMultiplier: "",
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
    setTileSelected(state, action) {
      state.tileSelected = action.payload;
    },
    setRestor(state, action) {
      state.restor = action.payload
    },
    setRestodMultiplier(state, action) {
      state.restorMultiplier = action.payload
    },
  },
});

export const { setValues, setBettingStatus, setShowRandomField, setGameBet, setTileSelected, setRestor, setRestodMultiplier } = dragonTowerGameSlice.actions;

export default dragonTowerGameSlice.reducer;
