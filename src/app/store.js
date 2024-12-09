import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import plinkoGameReducer from "../features/casino/plinkoSlice";
import crashGameReducer from "../features/casino/crashSlice";
import minesGameReducer from "../features/casino/minesSlice";
import limboGameReducer from "../features/casino/limboSlice";
import WheelGameReducer from "../features/casino/wheelSlice";
import dragonTowerGameReducer from "../features/casino/dragonTowerSlice"
import KenoGameReducer from "../features/casino/kenoSlice"
import SlideGameReducer from "../features/casino/slideSlice"
import allGames from "../features/casino/allGameSlice"
import betReducer from "../features/auth/betSlipSlice"
import chatReducer from "../features/auth/chatSlice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    crashGame: crashGameReducer,
    minesGame: minesGameReducer,
    plinkoGame: plinkoGameReducer,
    limboGame: limboGameReducer,
    wheelGame: WheelGameReducer,
    dragonTowerGame: dragonTowerGameReducer,
    kenoGame: KenoGameReducer,
    slideGame: SlideGameReducer,
    allGame: allGames,
    betslip: betReducer,
    chat: chatReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializability check
    }),
});

export default store;
