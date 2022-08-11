import { Schema, model } from "mongoose";

export type User = {
  name: string;
  profilepic: string;
  email: string;
  karma: number; // points
};

// String is constructor and string is type
const UserSchema = new Schema<User>({
  name: String,
  profilepic: String,
  email: String,
  karma: String,
});

const UserModel = model("user", UserSchema);
export { UserModel };
