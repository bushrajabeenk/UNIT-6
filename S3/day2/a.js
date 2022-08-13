//creating a basic http server in Node.js without using express

const http = require("http");

const server = http.createServer((req, res) => {
  res.sendDate("hello");
});

server.listen(8080);
