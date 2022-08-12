const fs = require("fs");

// if setImmediate is inside of a callback, then setImmediate
// will definitely get executed first no matter which other function is present
fs.readFile("test.txt", "utf-8", function () {
  setTimeout(() => {
    console.log("Set Timeout");
  }, 1);

  setImmediate(() => {
    console.log("Set Immediate");
  });
});

setTimeout(() => {
  console.log("Set Timeout");
}, 1);

setImmediate(() => {
  console.log("Set Immediate");
});
