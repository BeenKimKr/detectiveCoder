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
                clientID: process.env.NAVER_CLIENT_ID,
                clientSecret: process.env.NAVER_CLIENT_SECRET,
                callbackURL: "/users/naver/callback",
            },
            async (accessToken, refreshToken, profile, done) => {
                try {
                    const exUser = await User.findById({ id: profile.id });
                    // 이미 가입된 네이버 프로필이면 성공
                    if (exUser) {
                        done(null, exUser);
                    } else {
                        const newUser = await User.create({
                            id: profile.id,
                            provider: 'naver',
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
