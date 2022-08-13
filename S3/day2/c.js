const express = require("express");
const { Server } = require("socket.io");

//created the routing with express
const app = express(); // express only for features, i.e routes and functionalities only

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
