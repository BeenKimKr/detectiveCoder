const { Router } = require("express");
const passport = require("passport");

const userAuthRouter = Router();

userAuthRouter.get(
  "/naver",
  passport.authenticate("naver", { authType: "reprompt" })
);

userAuthRouter.get(
  "/naver/callback",
  //? 그리고 passport 로그인 전략에 의해 naverStrategy로 가서 카카오계정 정보와 DB를 비교해서 회원가입시키거나 로그인 처리하게 한다.
  passport.authenticate("naver", { failureRedirect: "/" }),
  (req, res) => {
    res.redirect("/");
  }
);

module.exports = { userAuthRouter };
