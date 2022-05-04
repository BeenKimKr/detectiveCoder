const { userAuthService } = require("../../services/userService");
const passport = require("passport");
const {
  Strategy: NaverStrategy,
  Profile: NaverProfile,
} = require("passport-naver-v2");

const naver = () => {
  passport.use(
    new NaverStrategy(
      {
        clientID: process.env.NAVER_CLIENT_ID,
        clientSecret: process.env.NAVER_CLIENT_SECRET,
        callbackURL: "/users/naver/callback",
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          const exUser = await userAuthService.getUser({ id: profile.id });
          if (exUser) {
            done(null, exUser);
          } else {
            const newUser = await userAuthService.addUser({
              id: profile.id,
              provider: 'naver',
              name: profile.name,
              email: profile.email,
              gender: profile.gender,
              age: profile.age,
              birthday: profile.birthday
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
