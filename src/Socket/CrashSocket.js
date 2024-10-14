import { io } from "socket.io-client";
const CrashURL = "http://192.168.29.203:3003";
const token = localStorage.getItem("token");

export const CrashSocket = () => {
  return io(CrashURL, {
    path: "/ws",
    extraHeaders: {
      Authorization: `token: ${token}`,
    },
  });
};
