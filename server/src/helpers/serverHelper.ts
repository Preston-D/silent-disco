import express from "express";

// https://en.wikipedia.org/wiki/ANSI_escape_code#Colors
export function debugLogger(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  console.log("\x1b[32mINCOMING REQUEST ------------------------------\x1b[0m");
  console.log("\x1b[32mREQUEST URL: \x1b[0m", req.url);
  console.log("\x1b[32mREQUEST ACTION: \x1b[0m", req.method);
  //   console.log("\x1b[32mREQUEST BODY: \x1b[0m", req.body);
  console.log("\x1b[32m-----------------------------------------------\x1b[0m");
  next();
}

export function checkAuthenticated(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  if (req.isAuthenticated()) {
    return next();
  }
  return res.redirect("http://localhost:5173/login");
}

export function checkNotAuthenticated(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  if (req.isAuthenticated()) {
    return res.redirect("http://localhost:5173/");
  }
  return next();
}
