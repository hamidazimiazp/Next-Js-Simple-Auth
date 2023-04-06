import { models, model, Schema } from "mongoose";

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  fullName: String,
  bio: {
    type: String,
    minLength: 6,
  },
});

const User = models.User || model("User", userSchema);

export default User;
