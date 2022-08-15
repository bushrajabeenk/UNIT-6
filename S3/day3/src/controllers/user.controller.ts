// logic  is written in controllers

import { User, UserModel } from "../models/user.model";

export async function getAllUsers() {
  const usersList = await UserModel.find();
  return usersList;
}

export async function getUserById(id: String) {
  const user = await UserModel.findById(id);
  return user;
}
