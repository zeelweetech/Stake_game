import { createSlice } from "@reduxjs/toolkit";
import { io } from "socket.io-client";
const CrashURL = "http://192.168.29.203:3003";
const token = localStorage.getItem("token");

const initialState = {
  isSwiper: true,
  isboardControl: true,
  crashValues: {},
  gameStatusData: {},
  xValue: "",
  bettingStatus: "",
  crashStatus: "",
  combinedData: [],
  multiplier: 1,
  socket: null,
  isSocketConnected: false,
};

const crashGameSlice = createSlice({
  name: "crashGame",
  initialState,
  reducers: {
    SwiperModel: (state, action) => {
      state.isSwiper = action.payload;
    },
    BoardControlModel: (state, action) => {
      state.isboardControl = action.payload;
    },
    setCrashValues(state, action) {
      state.crashValues = action.payload;
    },
    setGameStatusData(state, action) {
      state.gameStatusData = action.payload;
    },
    setXValue(state, action) {
      state.xValue = action.payload;
    },
    setBettingStatus(state, action) {
      state.bettingStatus = action.payload;
    },
    setCrashStatus(state, action) {
      state.crashStatus = action.payload;
    },
    setCombinedData(state, action) {
      state.combinedData = action.payload;
    },
    setMultiplier(state, action) {
      state.multiplier = action.payload;
    },
    connectSocket: (state) => {
      if (!state.socket) {
        state.socket = io(CrashURL, {
          path: "/ws",
          extraHeaders: {
            Authorization: `token: ${token}`,
          },
        });

        state.socket.on("connect", () => {
          state.isSocketConnected = true;
          console.log("Crash socket connected");
        });

        state.socket.on("disconnect", () => {
          state.isSocketConnected = false;
          console.log("Crash socket disconnected");
        });

        state.socket.on("connect_error", (error) => {
          console.error("Crash socket connection error:", error);
        });
      }
    },
    disconnectSocket: (state) => {
      if (state.socket) {
        state.socket.disconnect();
        state.socket = null;
        state.isSocketConnected = false;
      }
    },
  },
});

export const {
  SwiperModel,
  BoardControlModel,
  setCrashValues,
  setGameStatusData,
  setXValue,
  setBettingStatus,
  setCrashStatus,
  setCombinedData,
  setMultiplier,
  connectSocket,
  disconnectSocket,
} = crashGameSlice.actions;

export default crashGameSlice.reducer;
