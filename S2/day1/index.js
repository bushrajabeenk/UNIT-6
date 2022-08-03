const express = require("express");
const mongoose = require("mongoose");
const UserModel = require("./models/User.model");
const jwt = require("jsonwebtoken");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/signup", (req, res) => {
  const { username, password, age } = req.body;
  const user = new UserModel({
    username,
    password,
    age,
  });
  user.save();
  return res.send("Signup successfull");
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await UserModel.findOne({ username, password });
  if (!user) {
    // 401 is unauthorized
    return res.status(401).send("Please enter valid credentials");
  }
  const token = jwt.sign(
    {
      username: user.username,
      age: user.age,
      id: user._id,
    },
    "SECRET"
  );
  return res.send({ message: "Login successfull", token: token });
});

mongoose.connect("mongodb://localhost:27017/web-17").then(() => {
  app.listen(8080, () => {
    console.log("Server started on port 8080");
  });
});
