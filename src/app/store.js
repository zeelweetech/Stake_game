import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import plinkoGameReducer from "../features/casino/plinkoSlice";
import crashGameReducer from "../features/casino/crashSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    plinkoGame: plinkoGameReducer,
    crashGame: crashGameReducer,
  },
});

export default store;
