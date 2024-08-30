import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import plinkoGameReducer from "../features/casino/plinkoSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    plinkoGame: plinkoGameReducer,
  },
});

export default store;
