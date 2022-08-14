const express = require("express");
const { Server } = require("socket.io");

const app = express(); // express only for features

const webServer = require("http").createServer(app);

const wss = new Server(webServer);

wss.on("connection", (ws) => {
  console.log("New user joined");

  ws.on("new message", (msgg) => {
    // console.log("Got new message", msgg);

    // use ws to get the message on all the users except the sender user
    // ws.emit("new message", msgg);

    // use wss to get the message on all the users including itself
    wss.emit("new message", msgg);
  });
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// sendFile is express operation, not OS- file/fs operation
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/d.html");
});

webServer.listen(8080, () => {
  console.log("Server started on port 8080");
});
