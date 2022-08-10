const express = require("express");
const { Server } = require("socket.io");

const app = express(); // e

const webServer = require("http").createServer(app);

const wss = new Server(webServer);

wss.on("connection", (ws) => {
  console.log("New user joined");

  ws.on("new message", (msgg) => {
    console.log("Got new message", msgg);
  });
  //   ws.send("hello user");
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

webServer.listen(8080, () => {
  console.log("Server started on port 8080");
});
