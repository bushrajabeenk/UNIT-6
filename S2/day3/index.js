const express = require("express");
const UserModel = require("./models/user.model");
const mongoose = require("mongoose");
const app = express();
const jwt = require("jsonwebtoken");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/signup", async (req, res) => {
  const { username, password, role } = req.body;

  const user = new UserModel({
    username,
    age: 12,
    hash: password,
    role, // role from frontend
  });

  await user.save();

  const token = jwt.sign(
    {
      id: user._id,
      username: user.username,
      role: user.role,
    },
    "SECRET"
  );
  return res.send({ token });
});

app.delete("/lecture/:lectureid", (req, res) => {
  const token = req.headers["authorization"].split(" ")[1];

  const { role } = jwt.verify(token, "SECRET");

  if (role !== "admin") {
    return res.status(403).send("You don't have access to delete a lecture");
  } else {
    return res.status(200).send("Lecture deleted successfully");
  }
});

mongoose.connect("mongodb://localhost:27017/web-17").then(() => {
  app.listen(8080, () => {
    console.log("Server started on port 8080");
  });
});
