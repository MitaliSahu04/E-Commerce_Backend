import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log("Database Connected");
    console.log("Database:", conn.connection.name);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;
