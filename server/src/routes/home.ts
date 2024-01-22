import express from "express";
const router = express.Router();
import passport from "passport";
import bcrypt from "bcrypt";

import User from "../models/user.js";
import {
  checkAuthenticated,
  checkNotAuthenticated,
} from "../helpers/serverHelper.js";

// Home
router.get("/", (req, res, next) => {
  res.send("Hello world");
  next();
});

// Login
router.post(
  "/login",
  checkNotAuthenticated,
  passport.authenticate("local", {
    successRedirect: "http://localhost:5173/",
    failureRedirect: "http://localhost:5173/login",
  })
);

// Register
router.post("/register", checkNotAuthenticated, async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      username: req.body.username,
      password: hashedPassword,
    });
    const newUser = await user.save();
    // res.status(201).json(newUser);
    res.redirect("http://localhost:5173/");
  } catch (error) {
    res.redirect("http://localhost:5173/register");
  }
});

// Myaccount
// router.get("/myaccount", checkAuthenticated, (req, res, next) => {
//   res.send("Hello world");
//   next();
// });

// Logout
router.post("/logout", function (req, res, next) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("http://localhost:5173/");
  });
});

export default router;
