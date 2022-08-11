import express from "express";
import { UserRouter } from "./routes/user.route";
import mongoose from "mongoose";
import config from "config";

//console.log(process.env);

const app = express();

app.use("/users", UserRouter);

app.listen(config.get("port"), () => {
  console.log("Server started at 3000");
});
