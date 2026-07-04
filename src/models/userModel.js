import mongoose from "mongoose";

const registrationSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      unique: true,
    },
  },
  {
    timestamptimestamps: true,
  },
);

export const registrationModel = mongoose.Schema(
  "registrationModel",
  registrationSchema,
);
