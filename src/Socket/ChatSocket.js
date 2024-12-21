import { io } from "socket.io-client";
const ChatURL = "http://192.168.29.203:3002";
const token = localStorage.getItem("token");

export const ChatSocket = io(ChatURL, {
  path: "/ws",
  extraHeaders: {
    Authorization: `token: ${token}`,
  },
 
});
