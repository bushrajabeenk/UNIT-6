// const { EventEmitter } = require("events");

// const emmitter = new EventEmitter();

// emmitter.on(event, callback)
// emmitter.emit(event)

// emmitter.on("greet", function () {
//   console.log("Someone said hello");
// });

// emmitter.on("logout", function () {
//   console.log("Someone logged out");
// });

// setTimeout(() => {
//   emmitter.emit("greet");
// });

// setTimeout(() => {
//   emmitter.emit("logout");
// }, 3000);

// const stream = createReadStream("test.txt");

// stream.on("data", (data) => {
//   console.log(data.toString("utf-8"));
// });

// stream.on("end", () => {
//   console.log("finished file reading");
// });

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
