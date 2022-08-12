const bar = () => console.log("bar settimeout");

const baz = () => console.log("baz");

const foo = () => {
  setTimeout(bar, 0);
  console.log("foo");
  new Promise((resolve, reject) => {
    resolve("should be right after baz, before bar");
  })
    .then((resolve) => console.log(resolve))
    .then((resolve) => console.log("8888******"));
  baz();
};

const add = () => console.log("add", 2 + 3);

add();
foo();
console.log("foood");
