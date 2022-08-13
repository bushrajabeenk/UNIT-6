// ws is a websocket library
// socket.io is another websocket library
const { WebSocketServer } = require("ws");

// server is created
const wss = new WebSocketServer({ port: 8080 });

// wss.on then ctrl+space will give the list of all the
// events present on wss..
// listening happens when server is in listening mode
// events listening/close/connection/error/headers are predefined events available on wss
// server is started
// ready to accept new connections
wss.on("listening", () => {
  console.log("Server started, listening for new connections");
});

wss.on("connection", (ws) => {
  console.log("Got new connection");
  ws.send("Welcome user");
});
