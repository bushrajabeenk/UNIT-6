// 1. server needs to send data without client making requests
// 2. data constantly chnaging stream
// Node.js internal package called emitter

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------

// const event = require("events");
// const emitter = new event.EventEmitter();
// emitter.on("greet", function () {
//   console.log("Someone said hello");
// });
// emitter.emit("greet");

// OR directly as EventEmitter from events

// const { EventEmitter } = require("events");
// events is a nodejs module

// const emmitter = new EventEmitter();
// emmitter.on(eventName, callback)
// emmitter.emit(event)

// when eventName is greet, print Someone said hello
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

//----------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------

// const stream = createReadStream("test.txt");

// stream.on("data", (data) => {
//   console.log(data.toString("utf-8"));
// });

// stream.on("end", () => {
//   console.log("finished file reading");
// });

// const { WebSocketServer } = require("ws");

// const wss = new WebSocketServer({ port: 8080 });

// wss.on("listening", () => {
//   console.log("Server started, listening for new connections");
// });

// when client establishes a connection with server
// wss.on("connection", (ws) => {
//   console.log("Got new connection");
//   ws.on("message", (data) => {
//     console.log("Socket sent message:", data.toString("utf-8"));
//     ws.send("Hi back");
//   });
// });
