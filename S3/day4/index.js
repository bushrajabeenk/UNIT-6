const bar = () => console.log("bar settimeout"); // 7

const baz = () => console.log("baz"); // 3

const foo = () => {
  setTimeout(bar, 0); 
  console.log("foo"); // 2
  new Promise((resolve, reject) => {
    resolve("should be right after baz, before bar"); // 5
  })
    .then((resolve) => console.log(resolve))
    .then((resolve) => console.log("8888******")); // 6
  baz();
};

const add = () => console.log("add", 2 + 3); // 1

add();
foo();
console.log("foood"); // 4


// Queue: bar
// Promise queue: 8888******, should be right after baz, before bar
