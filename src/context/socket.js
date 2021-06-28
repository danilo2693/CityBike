import React from "react";
import socketIOClient from "socket.io-client";

export const socket = socketIOClient.connect(process.env.REACT_APP_BASE_URL);
export const SocketContext = React.createContext();