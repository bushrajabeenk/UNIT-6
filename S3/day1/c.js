// ws is a websocket library
// socket.io is another websocket library
const { WebSocketServer } = require("ws");

const wss = new WebSocketServer({ port: 8080 });

wss.on("listening", () => {
  console.log("Server started, listening for new connections");
});

// when client establishes a connection with server
wss.on("connection", (ws) => {
  console.log("Got new connection");
  ws.on("message", (data) => {
    console.log("Socket sent message:", data.toString("utf-8"));
    ws.send("Hi back");
  });
});
