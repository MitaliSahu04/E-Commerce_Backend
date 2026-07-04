import {userModel} from "../models/userModel.js";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";

export const registerControlller = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    // Required Fields Validation
    if (!firstName || !lastName || !email || !password ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    // Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email format.",
      });
    }

    // Password Length
    if (password.length < 8) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 8 characters long.",
      });
    }

    // Existing Email Check
    const existingUser = await userModel.findOne({
      email: email.toLowerCase(),
    });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "Email already exists.",
      });
    }

    // Hash Password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Generate Customer GUID
    const custGuId = uuidv4();

    // Create User
    const user = await userModel.create({
      custGuId,
      firstName,
      lastName,
      email: email.toLowerCase(),
      password: hashedPassword,
    });

    return res.status(201).json({
      success: true,
      message: "Registration successful.",
      data: {
        custGuId: user.custGuId,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      },
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error.",
    });
  }
};
