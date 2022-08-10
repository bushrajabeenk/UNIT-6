const express = require("express");
const { Server } = require("socket.io");

const app = express(); // e

const webServer = require("http").createServer(app);

const wss = new Server(webServer);

const history = [];

wss.on("connection", (ws) => {
  console.log("New user joined");

  // every single socket except current socket
  ws.broadcast.emit("new User");

  ws.emit("history", history);

  ws.on("new message", (msgg) => {
    console.log("Got new message", msgg);

    history.push(msgg);

    // use ws to get the message on all the users except the
    // sender user
    ws.emit("new message", msgg);

    // use wss to get the message on all the users including
    // itself
    wss.emit("new message", msgg);
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
