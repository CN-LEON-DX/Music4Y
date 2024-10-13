import { Router, Request, Response } from "express";
import User from "../../models/user.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import express from "express";
import session from "express-session";
const router: Router = Router();
import sendMailHelper from "../../helpers/sendMail.helper";
import generateOTP from "../../helpers/generate-otp";
import Verification from "../../models/verification.model";

export const register = async (req: Request, res: Response) => {
  res.render("client/pages/auth/register", {
    pageTitle: "Register",
  });
};

export const registerPost = async (req: Request, res: Response) => {
  try {
    delete req.body["password-again"];
    const user = new User(req.body);
    user.status = "pending";

    const userExit = await User.findOne({
      $or: [{ email: req.body.email }, { phoneNumber: req.body.phoneNumber }],
      status: "active",
    });
    if (userExit) {
      res.render("client/pages/auth/register", {
        pageTitle: "Register",
        userExit: true,
      });
    } else {
      // await user.save();
      // encrypt password with JWT and bcrypt
      user.password = await bcrypt.hash(user.password, 10);
      await user.save();

      // create a new nodemailer
      // send email to user
      const otp = generateOTP();

      // create an record verification
      const newOtpAuth = new Verification({
        email: user.email,
        otpCode: otp,
        expiresAt: new Date(Date.now() + 3 * 60 * 1000),
      });
      await newOtpAuth.save();

      const subject = `OTP verification code`;
      const html = `
          Your OTP code is valid in 3 minutes: ${otp}. Don't reveal this code to another one.
      `;

      sendMailHelper(user.email, subject, html);

      res.redirect(`/user/verify/otp?email=${user.email}`);
    }
  } catch (e) {
    res.render("/client/pages/error/error404");
  }
};

export const verifyOtp = async (req: Request, res: Response) => {
  const referer = req.get("Referer");
  const isBackNavigation =
    referer && referer.includes(`/user/verify/otp?email=${req.query.email}`);

  res.render("client/pages/auth/email-verify", {
    pageTitle: "Verify OTP",
    email: req.query.email,
    isBack: isBackNavigation,
  });
};

export const verifyOtpPost = async (req: Request, res: Response) => {
  try {
    const { email, otp } = req.body;

    const user = await User.findOne({ email: email, status: "pending" });
    if (!user) {
      return res.redirect("back");
    }

    const otpVerification = await Verification.findOne({
      email: email,
      otpCode: otp,
    });

    if (!otpVerification) {
      return res.redirect("back");
    }

    await User.updateOne({ email: email }, { status: "active" });

    const token = jwt.sign(
      {
        fullName: user.fullName,
        avatar: user.avatar,
        email: user.email,
        id: user._id,
      },
      process.env.JWT_SECRET,
      { expiresIn: "4h" } // Token expiration time
    );

    await Verification.deleteOne({ email: email });

    res.cookie("tokenUser", token);
    res.locals.user = user;

    res.redirect("/");
  } catch (e) {
    console.error(e);
  }
};

export const login = async (req: Request, res: Response) => {
  res.render("client/pages/auth/login", {
    pageTitle: "Login",
  });
};

export const loginPost = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email: email });
  if (user && (await bcrypt.compare(password, user.password))) {
    const token = jwt.sign(
      {
        fullName: user.fullName,
        avatar: user.avatar,
        email: user.email,
        id: user._id,
      },
      process.env.JWT_SECRET,
      { expiresIn: "4h" } // Token expiration time
    );

    res.cookie("tokenUser", token);
    res.locals.user = user;

    res.redirect("/");
  } else {
    res.render("client/pages/auth/login", {
      pageTitle: "Login",
      error: "Invalid email or password.",
    });
  }
};

export const inforUser = async (req: Request, res: Response) => {
  res.send("Infor user");
};

export const logOut = async (req: Request, res: Response) => {
  res.clearCookie("tokenUser");
  res.redirect("/");
};
