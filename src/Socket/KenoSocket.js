import { io } from "socket.io-client";
const KenoURL = "http://192.168.29.203:3009";
const token = localStorage.getItem("token");

export const KenoSocket = () => {
  return io(KenoURL, {
    path: "/ws",
    extraHeaders: {
      Authorization: `token: ${token}`,
    },
  });
};
