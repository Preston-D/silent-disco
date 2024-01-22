import "dotenv/config";
import express from "express";
const app = express();
import mongoose from "mongoose";
import cors from "cors";

import passport from "passport";
import session from "express-session";

import initializePassport from "./passport-config.js";

// Mongoose Setup
if (process.env.DATABASE_URL != null) {
  mongoose.connect(process.env.DATABASE_URL);
} else {
  console.log("Error fetching database URL");
}

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connnected to Database"));
// TODO: Env this
// This should be uncommented in production
// mongoose.set('autoIndex', false);

// Express Setup
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// CORS Setup
app.use(
  cors({
    origin: "http://localhost:5173",
    // credentials: true,
  })
);

// Session setup
if (process.env.SESSION_SECRET != undefined) {
  app.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
    })
  );
} else {
  console.log("Error: No SESSION_SECRET in .env file.");
}

// Passport Setup
app.use(passport.session());
initializePassport(passport);

// Debugger, this should be the last app.use(), excluding routers.
import { debugLogger } from "./helpers/serverHelper.js";
app.use(debugLogger);

// Routes
import usersRouter from "./routes/users.js";
app.use("/users", usersRouter);

import homeRouter from "./routes/home.js";
app.use("/", homeRouter);

// Start Server
app.listen(3000, () => console.log("Server Started"));
