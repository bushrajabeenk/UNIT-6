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

// when client/user/frontend establishes a connection with server
// wss.on("connection", (ws) => {
//   console.log("Got new connection");
// });

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
