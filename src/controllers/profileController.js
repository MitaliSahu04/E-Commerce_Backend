import { userModel } from "../models/userModel.js";

export const getProfile = async (req, res) => {
  try {
    // Get logged-in user's id from JWT
    const userId = req.user.id;
    console.log("User ID:", userId);

    const user = await userModel
      .findById(userId)
      .select("-password");
      console.log("User from Mongo:", user);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Profile fetched successfully.",
      data: user,
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error.",
    });
  }
};