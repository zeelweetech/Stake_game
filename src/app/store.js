import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import plinkoGameReducer from "../features/casino/plinkoSlice";
import crashGameReducer from "../features/casino/crashSlice";
import minesGameReducer from '../features/casino/minesSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    crashGame: crashGameReducer,
<<<<<<< HEAD
    minesGame: minesGameReducer,
=======
    plinkoGame: plinkoGameReducer,
>>>>>>> 2c08ad91710b944a47470b1abc5d8295a7f31ca0
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializability check
    }),
});

export default store;
