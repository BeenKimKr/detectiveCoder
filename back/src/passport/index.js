const passport = require("passport");
const { User } = require("../db");
const naver = require("./strategy/naver");

module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById({ where: { id } })
      .then((user) => done(null, user))
      .catch((err) => done(err));
  });

  naver();
};
