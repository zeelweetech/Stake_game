import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  values: {
    risk: "Medium",
    rows: 16,
  },
  score: 0,
  balls: [],
  pins: [],
  gameStatus: "idle",
};

const plinkoGameSlice = createSlice({
  name: "plinkoGame",
  initialState,
  reducers: {
    setValues(state, action) {
      state.values = action.payload;
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

export const { setValues } = plinkoGameSlice.actions;

export default plinkoGameSlice.reducer;
