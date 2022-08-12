setTimeout(() => {
  console.log("zero timeout");
}, 0);

setTimeout(() => {
  console.log("zero timeout 2");
});

process.nextTick(() => {
  console.log("next tick");
});

console.log("last");
