import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  values: {
    betamount: "",
    risk: "medium",
    rows: 16,
    numberofbets: "",
  },
  lastMultipliers: [],
  score: 0,
  balls: [],
  pins: [],
  gameStatus: "idle",
  finalMultiplier: "",
  stopAutoBet: false,
  completeBetStatus: false,
};

const plinkoGameSlice = createSlice({
  name: "plinkoGame",
  initialState,
  reducers: {
    setValues(state, action) {
      state.values = action.payload;
    },
    setFinalMultiplier(state, action) {
      state.finalMultiplier = action.payload;
    },
    setStopAutoBet(state, action) {
      state.stopAutoBet = action.payload;
    },
    setCompleteBetStatus(state, action) {
      state.completeBetStatus = action.payload;
    },
    setLastMultipliers(state, action) {
      state.lastMultipliers = action.payload;
    },
    // startGame(state) {
    //   state.gameStatus = "running";
    //   state.balls = [];
    //   state.score = 0;
    // },
    // dropBall(state, action) {
    //   state.balls.push(action.payload);
    // },
    // updateScore(state, action) {
    //   state.score += action.payload;
    // },
    // endGame(state) {
    //   state.gameStatus = "finished";
    // },
  },
});

export const {
  setValues,
  setFinalMultiplier,
  setStopAutoBet,
  setCompleteBetStatus,
  setLastMultipliers,
} = plinkoGameSlice.actions;

export default plinkoGameSlice.reducer;
