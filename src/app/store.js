import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import plinkoGameReducer from "../features/casino/plinkoSlice";
import crashGameReducer from "../features/casino/crashSlice";
import minesGameReducer from '../features/casino/minesSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    plinkoGame: plinkoGameReducer,
    crashGame: crashGameReducer,
    minesGame: minesGameReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializability check
    }),
});

export default store;
