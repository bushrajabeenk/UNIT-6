// using express, for routing and for using middlewares
const express = require("express");
const { Server } = require("socket.io");

// created the routing with express
// but not started the server with app, 
// rather with websocket
const app = express();
// express only for features,
// i.e routes and functionalities only

// use http for creating the server, so that
// i can pass it down to socket.io
// we are using http for serving the index.html file
// because with websocket only text responses will get served, files
// cannot be served
// if html file is not needed to be served then
// http server is not needed
// if it only API based response, http, express is not needed
const httpServer = require("http").createServer(app);

const wss = new Server(httpServer);

wss.on("connection", (ws) => {
  console.log("New user joined");
  ws.send("hello user");
});

// app has middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app has routes
// sendFile is express operation, not OS- file/fs operation
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/c.html");
});

httpServer.listen(8080, () => {
  console.log("Server started on port 8080");
});
