import { io } from "socket.io-client";
const WheelURL = "http://192.168.29.203:3006";
const token = localStorage.getItem("token");

export const WheelSocket = io(WheelURL, {
  path: "/ws",
  extraHeaders: {
    Authorization: `token: ${token}`,
  },
});
