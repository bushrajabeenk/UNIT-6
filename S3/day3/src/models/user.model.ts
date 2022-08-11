import { Schema, model } from "mongoose";

type User = {
  name: String;
  profilepic: String;
  email: String;
  karma: Number; // points
};

const UserSchema = new Schema<User>({
  name: String,
  profilepic: String,
  email: String,
  karma: String,
});

const UserModel = model("user", UserSchema);
export { UserModel };
