import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isManual: true,
  mineValue: {
    betamount: 0,
    mines: 3,
  },
  bettingStatus: "",
  gameBet: false,
  gamesOver: false,
  tileSelect: "",
  gameStart: "",
  minesBetStatus: false,
  restored: "",
  restoredMultiplier: "",
  showFields: false,
  revealed: Array(25).fill(false),

  // auto part state
  autoBet: false,
  preSelectTile: [],
  autoBetResult: "",
};

const minesGameSlice = createSlice({
  name: "minesGame",
  initialState,
  reducers: {
    setIsManual(state, action) {
      state.isManual = action.payload;
    },
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
    setRevealed(state, action) {
      state.revealed = action.payload
    },

    // auto part state
    setAutoBet(state, action) {
      state.autoBet = action.payload
    },
    setPreSelectTile(state, action) {
      state.preSelectTile = action.payload
    },
    setAutoBetResult(state, action) {
      state.autoBetResult = action.payload
    },
  },
});

export const {
  setIsManual,
  setMineValue,
  setBettingStatus,
  setGameBet,
  setGamesOver,
  setTileSelect,
  setGameStart,
  setMinesBetStatus,
  setRestored,
  setRestoredMultiplier,
  setShowFields,
  setPreSelectTile,
  setAutoBetResult,
  setAutoBet,
  setRevealed
} = minesGameSlice.actions;

export default minesGameSlice.reducer;
