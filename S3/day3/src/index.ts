import express from "express";
import { UserRouter } from "./routes/user.route";
const app = express();

app.use("/users", UserRouter);

app.listen(3000, () => {
  console.log("Server started at 3000");
});
