const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const axios = require("axios");
const cors = require("cors");
const citybikeurl = "http://api.citybik.es/v2/networks/decobike-miami-beach";

const port = process.env.PORT || 4001;
const index = require("./routes/index");
const app = express();
const intervalInMilliseconds = 5000;

app.use(cors());
app.use(index);

const server = http.createServer(app);
const io = socketIo(server);
let interval;

io.on("connection", (socket) => {
  var socketId = socket.id;
  var clientIp = socket.request.connection.remoteAddress;
  console.log("New connection " + socketId + " from " + clientIp);
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(
    () => getCityBikesData(socket),
    intervalInMilliseconds
  );
  socket.on("disconnect", () => {
    console.log("Client disconnected");
    clearInterval(interval);
  });
});

const getCityBikesData = async (socket) => {
  try {
    const response = await axios.get(citybikeurl);
    const { data: { network: { stations }} } = response;
    socket.emit("city-bike-stations", stations);
  } catch (error) {
    console.log(`We have a error with the API: ${error}`);
  }
};

server.listen(port, () => console.log(`Listening on port ${port}`));
