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

// created a token with password + data
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
    // {
    //   expiresIn: "20s",
    // }
  );
  return res.send({ message: "Login successfull", token: token });
});

// verify the token
app.get("/profile/:id", async (req, res) => {
  const { id } = req.params;
  // earlier this was done
  // this would be no privacy/ no protection
  // const user = await UserModel.findOne({ _id: id });
  // res.send({ message: "Profile page", user });

  // Bearer is 0th key, token is 1st key
  // the below code ie jwt gives privacy to protected routes
  const token = req.headers["authorization"].split(" ")[1];
  try {
    const verification = jwt.verify(token, "SECRET");
    console.log(verification);

    if (verification) {
      const user = await UserModel.findOne({ _id: id });
      res.status(200).send({ message: "Profile page", user });
    }
  } catch {
    return res.status(401).send("Unauthorized");
  }
});

mongoose.connect("mongodb://localhost:27017/web-17").then(() => {
  app.listen(8080, () => {
    console.log("Server started on port 8080");
  });
});
