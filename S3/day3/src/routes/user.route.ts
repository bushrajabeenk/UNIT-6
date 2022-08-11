import { Router } from "express";
import { UserModel } from "../models/user.model";

export const UserRouter = Router();

UserRouter.post("/", (req, res) => {
  res.send("User created successfully");
});

UserRouter.get("/:id", (req, res) => {
  const { id } = req.params;
  const user = UserModel.find({ id });
  res.send("User details are: 1234");
});

UserRouter.delete("/:id", (req, res) => {
  res.send("deleted user of given id");
});

UserRouter.put("/:id", (req, res) => {
  res.send("updated information of user of given id");
});
