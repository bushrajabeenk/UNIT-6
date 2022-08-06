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

  const accessToken = jwt.sign(
    {
      username: user.username,
      age: user.age,
      id: user._id,
    },
    "SECRET"
  );
  //   return res.send({ message: "Login successfull", accessToken: accessToken });

  // not necessary to give the user details once again in refresh Token
  const refreshToken = jwt.sign({}, "REFRESHTOKEN", { expiresIn: "7 days" });

  return res.send({
    message: "Login successfull",
    accessToken: accessToken,
    refreshToken: refreshToken,
  });
});

// 7c733bb5e3e5ab2e2dbd99746277babfc0331978

app.post("/isTokenValid", () => {});

app.post("/newToken", (req, res) => {
  const refreshToken = req.headers["authorization"].split(" ")[1];

  const validation = jwt.verify(refreshToken, "REFRESHTOKEN");
  if (validation) {
    const newPrimaryToken = jwt.sign({}, "SECRET", { expiresIn: "1 hour" });
    return res.send({ accessToken: newPrimaryToken });
  }
});

app.get("/profile/:id", async (req, res) => {
  const { id } = req.params;

  const accessToken = req.headers["authorization"].split(" ")[1];
  try {
    const verification = jwt.verify(token, "SECRET");
    console.log(verification);

    if (verification) {
      const user = await UserModel.findOne({ _id: id });
      res.send({ message: "Profile page", user });
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
