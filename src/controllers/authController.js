import jwt from "jsonwebtoken";

export const loginAuth = async (req, res) => {
  try {
    const { username, password, apiKey } = req.body;

    if (!username || !password || !apiKey) {
      return res.status(400).json({
        success: false,
        message: "Username, Password and ApiKey are required",
      });
    }

    if (
      username !== process.env.API_USERNAME ||
      password !== process.env.API_PASSWORD ||
      apiKey !== process.env.API_KEY
    ) {
      return res.status(401).json({
        success: false,
        message: "Invalid Credentials",
      });
    }

    const token = jwt.sign(
      {
        username,
        apiKey,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_EXPIRES_IN,
      }
    );

    return res.status(200).json({
      success: true,
      message: "Login Successful",
      token,
      tokenType: "Bearer",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};