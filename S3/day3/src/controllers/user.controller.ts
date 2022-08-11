import { User, UserModel } from "../models/user.model";

export async function getAllUsers() {
  const usersList = await UserModel.find();
  return usersList;
}
