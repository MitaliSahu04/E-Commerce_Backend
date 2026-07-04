import mongoose from "mongoose";
import dotenv from "dotenv";


dotenv.config();

const connectDB = async () => {
  try {
    console.log(process.env.MONGO_URL);

    const conn = await mongoose.connect(process.env.MONGO_URL);

    console.log("Connected!");
    console.log(conn.connection.host);
  } catch (err) {
    console.log(err);
  }
};

export default connectDB;
