const { WebSocketServer } = require("ws");

const wss = new WebSocketServer({ port: 8080 });

wss.on("listening", () => {
  console.log("Server started, listening for new connections");
});

wss.on("connection", (ws) => {
  console.log("Got new connection");
  ws.send("Welcome user");
});
