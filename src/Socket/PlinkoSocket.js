import { io } from "socket.io-client";
const PlinkoURL = "http://192.168.29.203:3004";
const token = localStorage.getItem("token");

export const PlinkoSocket = () => {
  return io(PlinkoURL, {
    path: "/ws",
    extraHeaders: {
      Authorization: `token: ${token}`,
    },
  });
};
