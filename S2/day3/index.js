const express = require("express");
const UserModel = require("./models/user.model");
const mongoose = require("mongoose");
const app = express();
const jwt = require("jsonwebtoken");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/signup", async (req, res) => {
  const { username, password, role } = req.body;

  const user = await new UserModel({
    username: username,
    age: 12,
    hashPassword: password,
    role: "student", // role from frontend
  });

  await user.save();

  const token = jwt.sign({
    id: user._id,
    username: user.username,
    role: user.role,
  });
  return res.send({ token });
});

mongoose.connect("mongodb://localhost:27017/web-17").then(() => {
  app.listen(8080, () => {
    console.log("Server started on port 8080");
  });
});
