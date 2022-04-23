const { Router } = require("express");
const passport = require("passport");
const { userAuthService } = require("../services/userService");

const userAuthRouter = Router();

userAuthRouter.get("/naver", passport.authenticate("naver"));

userAuthRouter.get(
  "/naver/callback",
  passport.authenticate("naver", {
    failureRedirect: "/",
  }),
  (req, res) => {
    res.redirect("/");
  }
);

userAuthRouter.get("/kakao", passport.authenticate("kakao"));

userAuthRouter.get(
  "/kakao/callback",
  passport.authenticate("kakao", {
    failureRedirect: "/",
  }),
  (req, res) => {
    res.redirect("/");
  }
);

module.exports = { userAuthRouter };
