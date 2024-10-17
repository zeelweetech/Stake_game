import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mineValue: {
    betamount: 0,
    mines: 1,
  },
  bettingStatus: "",
  gameBet: false,
  gamesOver: false,
  tileSelect: "",
  gameStart: "",
  minesBetStatus: false,
  restored: "",
  restoredMultiplier: "",
  showFields: false
};

const minesGameSlice = createSlice({
  name: "minesGame",
  initialState,
  reducers: {
    setMineValue(state, action) {
      state.mineValue = action.payload;
    },
    setBettingStatus(state, action) {
      state.bettingStatus = action.payload;
    },
    setGameBet(state, action) {
      state.gameBet = action.payload;
    },
    setGamesOver(state, action) {
      state.gamesOver = action.payload;
    },
    setGameStart(state, action) {
      state.gameStart = action.payload;
    },
    setTileSelect(state, action) {
      state.tileSelect = action.payload;
    },
    setMinesBetStatus(state, action) {
      state.minesBetStatus = action.payload;
    },
    setRestored(state, action) {
      state.restored = action.payload
    },
    setRestoredMultiplier(state, action) {
      state.restoredMultiplier = action.payload
    },
    setShowFields(state, action) {
      state.showFields = action.payload
    },
  },
});

export const {
  setMineValue,
  setBettingStatus,
  setGameBet,
  setGamesOver,
  setTileSelect,
  setGameStart,
  setMinesBetStatus,
  setRestored,
  setRestoredMultiplier,
  setShowFields
} = minesGameSlice.actions;

export default minesGameSlice.reducer;
