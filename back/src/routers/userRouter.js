const { Router } = require("express");
const passport = require("passport");
const { userAuthService } = require("../services/userService");

const userAuthRouter = Router();

userAuthRouter.get('/naver', passport.authenticate("naver", null), (req, res) => {
    console.log("main");
});

userAuthRouter.get('/naver/callback', passport.authenticate("naver", {
    failureRedirect: "/"
}), (req, res) => {
    res.status(200).send(req.user);
});

module.exports = { userAuthRouter };
