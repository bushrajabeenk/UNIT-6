import { Router } from "express";
import { getUserById } from "../controllers/user.controller";
import { UserModel } from "../models/user.model";

export const UserRouter = Router();

UserRouter.post("/", (req, res) => {
  res.send("User created successfully");
});

UserRouter.get("/:id", (req, res) => {
  const { id } = req.params;
  const user = getUserById(id);
  return res.send(user);
});

UserRouter.delete("/:id", (req, res) => {
  res.send("deleted user of given id");
});

UserRouter.put("/:id", (req, res) => {
  res.send("updated information of user of given id");
});
