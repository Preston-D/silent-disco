import express from "express";
const router = express.Router();
import mongoose from "mongoose";

import User from "../models/user.js";

// TS custom interfaces
// export interface ResponseCustom extends express.Response {
//     user: User
// }

// Get All Users
router.get("/", async (req, res) => {
  try {
    console.log("logged in user: ", req.user);
    const users = await User.find();
    res.json(users);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: error });
    }
  }
});
// Get User
router.get("/:id", getUser, async (req, res: any) => {
  interface IUserPacket {
    id?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    createdAt?: Date;
    isCurrentSessionUser?: boolean;
  }
  const requestUser: any = req.user; // Who is logged in
  const responseUser = res.user; // Who is request id related to

  const userPacket: IUserPacket = {};
  // const responseUser: User = res.user;

  userPacket.id = responseUser._id.toString();
  userPacket.firstName = responseUser.firstName;
  userPacket.lastName = responseUser.lastName;
  userPacket.email = responseUser.email;
  userPacket.createdAt = responseUser.createdAt;
  // userPacket.isCurrentSessionUser =
  // requestUser != null && requestId === user._id.toString();
  if (requestUser != null) {
    userPacket.isCurrentSessionUser =
      requestUser._id.toString() === responseUser._id.toString();
  } else {
    userPacket.isCurrentSessionUser = false;
  }

  res.send(userPacket);
});

// Update a User
// TODO: Update
router.patch("/:id", getUser, async (req, res: any) => {
  if (req.body.firstName != null) {
    res.user.firstName = req.body.firstName;
  }
  if (req.body.lastName != null) {
    res.user.lastName = req.body.lastName;
  }
  if (req.body.email != null) {
    res.user.email = req.body.email;
  }
  if (req.body.createdAt != null) {
    res.json({ message: "createdAt cannot be updated." });
  }
  try {
    const updatedUser = await res.user.save();
    res.json(updatedUser);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(400).json({ message: error });
    }
  }
});

// Delete a User
router.delete("/:id", getUser, async (req, res: any) => {
  try {
    await res.user.delete();
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: error });
    }
  }
});

async function getUser(
  req: express.Request,
  res: any,
  next: express.NextFunction
) {
  let user;
  try {
    user = await User.findById(req.params.id);
    if (user == null) {
      return res.status(404).json({ message: "Cannot find User" });
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: error });
    }
  }
  res.user = user;
  next();
}

export default router;
