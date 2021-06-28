import React from "react";
import socketIOClient from "socket.io-client";
const endpoint = "http://127.0.0.1:4001";

export const socket = socketIOClient.connect(endpoint);
export const SocketContext = React.createContext();