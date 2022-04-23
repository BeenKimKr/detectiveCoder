const passport = require("passport");
const { User } = require("../db");
const { kakao } = require("./strategy/kakao");
const { naver } = require("./strategy/naver");

module.exports = () => {
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser(async (id, done) => {
        try {
            const user = await User.findOne({ where: { id } });
            done(null, user);
        } catch (error) {
            console.error(error);
            done(error);
        }
    });

    naver();
    kakao();
};
