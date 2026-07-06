import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    custGuId: {
      type: String,
      unique: true,
      required: true,
    }
  },
  {
    timestamps: true,
  },
);

export const userModel = mongoose.model(
  "userModel",
  userSchema,
);
