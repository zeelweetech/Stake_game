import { io } from "socket.io-client";

// const ChatURL = "http://192.168.29.203:3002";
const CrashURL = "http://192.168.29.203:3003";
const PlinkoURL = "http://192.168.29.203:3004";
// const MineURL = "http://192.168.29.203:3005";
// const WheelURL = "http://192.168.29.203:3006";
const LimboURL = "http://192.168.29.203:3007";
// const DragonTowerURL = "http://192.168.29.203:3008";

const token = localStorage.getItem("token");

// export const ChatSocket = io(ChatURL, {
//   path: "/ws",
//   extraHeaders: {
//     Authorization: `token: ${token}`,
//   },
// });

export const CrashSocket = io(CrashURL, {
  path: "/ws",
  extraHeaders: {
    Authorization: `token: ${token}`,
  },
});

export const PlinkoSocket = io(PlinkoURL, {
  path: "/ws",
  extraHeaders: {
    Authorization: `token: ${token}`,
  },
});

// export const MineSocket = io(MineURL, {
//   path: "/ws",
//   extraHeaders: {
//     Authorization: `token: ${token}`,
//   },
// });

// export const WheelSocket = io(WheelURL, {
//   path: "/ws",
//   extraHeaders: {
//     Authorization: `token: ${token}`,
//   },
// });

export const LimboSocket = io(LimboURL, {
  path: "/ws",
  extraHeaders: {
    Authorization: `token: ${token}`,
  },
});

// export const DragonTowerSocket = io(DragonTowerURL, {
//   path: "/ws",
//   extraHeaders: {
//     Authorization: `token: ${token}`,
//   },
// });
