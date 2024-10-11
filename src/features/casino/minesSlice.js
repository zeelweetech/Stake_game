import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mineValue: {
    betamount: "",
    mines: 1,
  },
  bettingStatus: "",
  gameBet: false,
  gamesOver: false,
  tileSelect: '',
  gameStart: ''
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
    }
  },
});

export const { setMineValue, setBettingStatus, setGameBet, setGamesOver, setTileSelect, setGameStart } = minesGameSlice.actions;

export default minesGameSlice.reducer;
