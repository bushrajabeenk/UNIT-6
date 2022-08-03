const express = require("express");

const app = express();

const CLIENT_ID = "6ce47bfc4056fb424104";
const CLIENT_SECRET = "e8efc398c7b552d3fb7e3b0936423a82dd4bb10d";

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  return res.sendFile(__dirname + "/index.html");
});

app.get("/github/callback", (req, res) => {
  const reqToken = req.query.code;

  console.log(reqToken);
  return res.send("Login Successful");
});

app.listen(8080, () => {
  console.log("Server started on port 8080");
});
