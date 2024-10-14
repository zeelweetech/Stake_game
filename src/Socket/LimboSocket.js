import { io } from "socket.io-client";
const LimboURL = "http://192.168.29.203:3007";
const token = localStorage.getItem("token");

export const LimboSocket = () => {
  return io(LimboURL, {
    path: "/ws",
    extraHeaders: {
      Authorization: `token: ${token}`,
    },
  });
};
