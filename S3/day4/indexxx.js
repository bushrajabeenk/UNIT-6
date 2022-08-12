setTimeout(() => {
  console.log("zero timeout");
}, 0);

setTimeout(() => {
  console.log("zero timeout 2");
});

process.nextTick(() => {
  console.log(add(1, 2));
  console.log("next tick 1");
});

process.nextTick(() => {
  console.log("next tick 2");
});

console.log("last");

function add(a, b) {
  return a + b;
}
