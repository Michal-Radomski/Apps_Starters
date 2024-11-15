import mongoose, { Schema, Document, models } from "mongoose";

enum userRole {
  "user",
  "admin",
  "staff",
}

export interface IUser extends Document {
  name: string;
  role: string;
}

const userSchema: Schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minLength: [3, "At least 3 characters"],
      maxLength: 100,
      unique: true,
    },
    role: { type: String, enum: userRole, default: "user" },
  },
  { timestamps: true, collection: "User" }
);

const User = models?.User || mongoose.model<IUser>("User", userSchema);

export default User;
