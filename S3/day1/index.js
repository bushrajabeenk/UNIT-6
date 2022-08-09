const { EventEmitter } = require("events");

const emmitter = new EventEmitter();

// emmitter.on(event, callback)
// emmitter.emit(event)

emmitter.on("greet", function () {
  console.log("Someone said hello");
});

emmitter.on("logout", function () {
  console.log("Someone logged out");
});

// setTimeout(() => {
//   emmitter.emit("greet");
// });

// setTimeout(() => {
//   emmitter.emit("logout");
// }, 3000);

const stream = createReadStream("test.txt");

stream.on("data", (data) => {
  console.log(data.toString("utf-8"));
});

stream.on("end", () => {
  console.log("finished file reading");
});
