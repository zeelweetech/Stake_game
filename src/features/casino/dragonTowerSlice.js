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
  isGameOver: false,
  rowsIndex: '',
  boxsIndex: '',
  clickedBoxes: {},
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
    setIsGameOver(state, action) {
      state.isGameOver = action.payload
    },
    setRowsIndex(state, action) {
      state.rowsIndex = action.payload
    },
    setBoxsIndex(state, action) {
      state.boxsIndex = action.payload
    },
    setClickedBoxes(state, action) {
      state.clickedBoxes = action.payload; // Add this to update clickedBoxes
    },
  },
});

export const { setValues, setBettingStatus, setShowRandomField, setGameBet, setTileSelected, setRestor, setRestodMultiplier, setIsGameOver, setRowsIndex, setBoxsIndex, setClickedBoxes } = dragonTowerGameSlice.actions;

export default dragonTowerGameSlice.reducer;
