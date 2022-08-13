const { WebSocketServer } = require("ws");

const wss = new WebSocketServer({ port: 8080 });

wss.on("listening", () => {
  console.log("Server started, listening for new connections");
});

wss.on("connection", (ws) => {
  console.log("Got new connection");

  ws.on("message", (data) => {
    // the data that is sent as ws.send from browser will
    // be vaialble here in ws, which can be accessed through
    // message, via data variable
    console.log("Socket sent message:", data.toString("utf-8"));
    // whatever is sent from here as ws.send will be available on the
    // browser inside ws
    // utf-8 is for converting buffer data into string
    ws.send("Hi back");
  });
});
