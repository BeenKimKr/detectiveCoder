const { User } = require('../../db');
const passport = require("passport");
const KakaoStrategy = require("passport-kakao").Strategy;

const kakao = () => {
    passport.use(
        new KakaoStrategy(
            {
                clientID: process.env.KAKAO_CLIENT_ID,
                clientSecret: process.env.KAKAO_CLIENT_SECRET,
                callbackURL: '/users/kakao/callback'
            },
            async (accessToken, refreshToken, profile, done) => {
                try {
                    const user = await User.findById({ id: profile.id });
                    if (user) {
                        done(null, user);
                    } else {
                        const newUser = await User.create({
                            id: profile.id,
                            provider: 'kakao',
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

module.exports = { kakao };
