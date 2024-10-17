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
  resultImage: '',
  resultRevealed: '',
  clickedMines: '',
  remainingMiness: ''
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
    setResultImage(state, action) {
      state.resultImage = action.payload
    },
    setResultRevealed(state, action) {
      state.resultRevealed = action.payload
    },
    setClickedMines(state, action) {
      state.clickedMines = action.payload
    },
    setRemainingMiness(state, action) {
      state.remainingMiness = action.payload
    }
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
  setResultImage,
  setResultRevealed,
  setClickedMines,
  setRemainingMiness
} = minesGameSlice.actions;

export default minesGameSlice.reducer;
