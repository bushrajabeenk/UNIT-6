const express = require("express");
const { Server } = require("socket.io");

const app = express(); // express only for features

const webServer = require("http").createServer(app);

const wss = new Server(webServer);

wss.on("connection", (ws) => {
  console.log("New user joined");
  ws.send("hello user");
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// sendFile is express operation, not OS- file/fs operation
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

webServer.listen(8080, () => {
  console.log("Server started on port 8080");
});
