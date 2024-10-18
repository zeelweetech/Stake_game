import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import plinkoGameReducer from "../features/casino/plinkoSlice";
import crashGameReducer from "../features/casino/crashSlice";
import minesGameReducer from "../features/casino/minesSlice";
import limboGameReducer from "../features/casino/limboSlice";
import WheelGameReducer from "../features/casino/wheelSlice";
import dragonTowerGameReducer from "../features/casino/dragonTowerSlice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    crashGame: crashGameReducer,
    minesGame: minesGameReducer,
    plinkoGame: plinkoGameReducer,
    limboGame: limboGameReducer,
    wheelGame: WheelGameReducer,
    dragonTowerGame: dragonTowerGameReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializability check
    }),
});

export default store;
