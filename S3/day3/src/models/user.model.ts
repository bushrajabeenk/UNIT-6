import { Schema, model } from "mongoose";

type User = {
  name: String;
  profile: String;
  email: String;
  karma: String; // points
};
