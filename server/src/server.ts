import "dotenv/config";
import express from "express";
const app = express();
import mongoose from "mongoose";
import cors from "cors";

// Mongoose Setup
if (process.env.DATABASE_URL != null) {
  mongoose.connect(process.env.DATABASE_URL);
} else {
  console.log("Error fetching database URL");
}

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connnected to Database"));
// This should be set in production
// mongoose.set('autoIndex', false);

// Express Setup
app.use(express.json());
import { debugLogger } from "./helpers/serverHelper.js";
app.use(debugLogger);

//CORS
app.use(
  cors({
    origin: "http://localhost:5173",
    // credentials: true,
  })
);
// Routes
import usersRouter from "./routes/users.js";
app.use("/users", usersRouter);

app.listen(3000, () => console.log("Server Started"));

// Home Routes '/'
app.get("/", (req, res, next) => {
  res.send("Hello World!");
  next();
});
