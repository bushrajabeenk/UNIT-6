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

const { EventEmitter } = require("events");
// events is a nodejs module

const emmitter = new EventEmitter();
// emmitter.on(eventName, callback)
// emmitter.emit(event)

// when eventName logout is triggered then, print Someone logged out
emmitter.on("logout", function () {
  console.log("Someone logged out");
});

// when eventName greet is triggered then, print Someone said hello
emmitter.on("greet", function () {
  console.log("Someone said hello");
});

// now the problem is, when will the emit event greet happen ?
// it happens whenever the emitter emits it
// i.e emitter.emit("greet")

// trigger the event greet after 2s
setTimeout(() => {
  emmitter.emit("greet");
}, 2000);

// trigger the event logout after 3s
setTimeout(() => {
  emmitter.emit("logout");
}, 3000);
