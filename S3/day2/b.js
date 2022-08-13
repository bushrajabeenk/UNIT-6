// serving a html file using express
const express = require("express");

const app = express(); // express only for features

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// sendFile is express operation, not OS- file/fs operation
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/b.html");
});

app.listen(8080, () => {
  console.log("Server started on port 8080");
});
