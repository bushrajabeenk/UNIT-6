const express = require("express");
const { Server } = require("socket.io");

const app = express(); // express only for features

const webServer = require("http").createServer(app);

const wss = new Server(webServer);

const history = [];

wss.on("connection", (ws) => {
  ws.broadcast.emit("new user", history);
  ws.emit("history", history);

  // ws.on("new message", (m) => {
  //   // use ws to get the message on all the users except the sender user
  //   // ws.broadcast.emit("new message", m);

  //   // use wss to get the message on all the users including itself
  //   wss.emit("new message", m);
  // });
});

wss.on("connection", (ws) => {
  ws.on("new message", (m) => {
    history.push(m);
    wss.emit("new message", m);
  });
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// sendFile is express operation, not OS- file/fs operation
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/d.html");
});

webServer.listen(8080, () => {
  console.log("Server started on port 8080");
});
