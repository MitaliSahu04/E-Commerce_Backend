import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/config/databaseConnection.js";
// import authRoute from "./src/routes/authRoute.js";
import registerRoute from "./src/routes/registerRoute.js";
import loginRoute from "./src/routes/loginRoute.js";
import profileRoute from "./src/routes/profileRoute.js";
import cors from "cors";
import wishlistRoute from "./src/routes/wishlistRoute.js";
import authMiddleware from "./src/middleware/authentication.js";

dotenv.config();

const app = express();
const port = process.env.PORT;

connectDB();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

// JWT token route
// app.use("/auth", authRoute);

// registration route
app.use("/api", registerRoute);

app.use("/api", loginRoute);

app.use("/api", authMiddleware, profileRoute);

app.use("/api", wishlistRoute)

app.listen(port, () => {
  console.log(`Server running of port number ${port}`);
});
