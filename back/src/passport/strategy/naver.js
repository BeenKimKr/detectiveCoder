const { User } = require("../../db");
const passport = require("passport");
const {
  Strategy: NaverStrategy,
  Profile: NaverProfile,
} = require("passport-naver-v2");

const naver = () => {
  passport.use(
    new NaverStrategy(
      {
        clientID: process.env.NAVER_ID,
        clientSecret: process.env.NAVER_SECRET,
        callbackURL: "/users/naver/callback",
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          const exUser = await User.findById({
            // 네이버 플랫폼에서 로그인 했고 & snsId필드에 네이버 아이디가 일치할경우
            id: profile.id,
          });
          // 이미 가입된 네이버 프로필이면 성공
          if (exUser) {
            console.log("success");
            done(null, exUser);
          } else {
            // 가입되지 않은 유저면 회원가입 시키고 로그인을 시킨다
            const newUser = await User.create({
              id: profile.id,
              provider: "naver",
            });
            done(null, newUser);
          }
        } catch (error) {
          console.error(error);
          done(error);
        }
      }
    )
  );
};

module.exports = { naver };
