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
    const user = await User.findOne({ email: email }).exec();
    if (user == null) {
      return done(null, false);
    }
    try {
      if (await bcrypt.compare(password, user.password)) {
        console.log(`User ${user.email} logged in.`);
        return done(null, user);
      } else {
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
