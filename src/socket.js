import { io } from "socket.io-client";

const URL = "http://192.168.29.203:3003";
const token = localStorage.getItem("token");

export const socket = io(URL, {
  path: "/ws",
  //   extraHeaders: {
  //     Authorization: `token: ${token}`,
  //   },
  //   autoConnect: true,
});
