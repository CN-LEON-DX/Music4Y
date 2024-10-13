// middleware/auth.ts
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const userMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies.tokenUser;

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        console.error(err);
        return next();
      }
      res.locals.user = decoded;
      next();
    });
  } else {
    res.locals.user = null;
    res.redirect("/user/login");
    return;
  }
};
