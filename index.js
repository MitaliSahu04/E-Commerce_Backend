import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/config/databaseConnection.js";
import authRoute from "./src/routes/authRoute.js"
import registerRoute from "./src/routes/registerRoute.js"
import login from "./src/routes/loginRoute.js"

dotenv.config();

const app = express();
const port = process.env.PORT;

connectDB();
app.use(express.json());

// JWT token route
app.use("/auth", authRoute);

// registration route
app.use("/api", registerRoute)

app.use("/api",login)

app.listen(port, () => {
  console.log(`Server running of port number ${port}`);
});