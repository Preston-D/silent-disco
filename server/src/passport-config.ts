import passport from "passport";
import bcrypt from "bcrypt";

import User from "./models/user.js";

import LocalStrategy from "passport-local";

function initializePassport(passport: passport.PassportStatic) {
  const authenticateUser = async (
    email: string,
    password: string,
    done: passport.DoneCallback
  ) => {
    console.log("attempting to authenticate", email);
    const user = await User.findOne({ email: email }).exec();
    console.log(user);
    if (user == null) {
      console.log("cannot find user", email);
      return done(null, false);
    }
    try {
      console.log("found user", user);
      if (await bcrypt.compare(password, user.password)) {
        console.log("password was correct");
        return done(null, user);
      } else {
        console.log("password was incorrect");
        done(null, false);
      }
    } catch (error) {
      done(error);
    }
  };

  // This fking typescript error I cannot for the life of me fix
  passport.use(new LocalStrategy({ usernameField: "email" }, authenticateUser));

  passport.serializeUser((user, done) => done(null, (user as User)._id));
  passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id).exec();
    return done(null, user);
  });
}

export default initializePassport;
