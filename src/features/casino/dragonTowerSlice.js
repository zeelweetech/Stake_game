import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isManual: true,
  values: {
    betamount: 0,
    difficulty: "medium",
  },
  completeFundStatus: false,
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
  gameOverResult: null,
  restorData: [],

  // auto part state
  preSelectTile: [],
  autoBetOnClick: false,
};

const dragonTowerGameSlice = createSlice({
  name: "dragonTowerGame",
  initialState,
  reducers: {
    setIsManual(state, action) {
      state.isManual = action.payload;
    },
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
      state.clickedBoxes = action.payload;
    },
    setGameOverResult(state, action) {
      state.gameOverResult = action.payload;
    },
    setRestorData(state, action) {
      state.restorData = action.payload;
    },
    setCompleteFundStatus(state, action) {
      state.completeFundStatus = action.payload;
    },

    // auto part state
    setPreSelectTile(state, action) {
      state.preSelectTile = action.payload
    },
    setAutoBetOnClick(state, action) {
      state.autoBetOnClick = action.payload
    },
  },
});

export const { setIsManual, setCompleteFundStatus, setValues, setBettingStatus, setShowRandomField, setGameBet, setTileSelected, setRestor, setRestodMultiplier, setIsGameOver, setRowsIndex, setBoxsIndex, setClickedBoxes, setGameOverResult, setRestorData, setPreSelectTile, setAutoBetOnClick } = dragonTowerGameSlice.actions;

export default dragonTowerGameSlice.reducer;
