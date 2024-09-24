import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  values: {
    risk: "medium",
    rows: 16,
  },
  score: 0,
  balls: [],
  pins: [],
  gameStatus: "idle",
  finalMultiplier: "",
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

export const { setValues, setFinalMultiplier } = plinkoGameSlice.actions;

export default plinkoGameSlice.reducer;
