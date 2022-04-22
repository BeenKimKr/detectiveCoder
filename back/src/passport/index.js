const passport = require("passport");
const { User } = require("../db");
const { naver } = require("./strategy/naver");

module.exports = () => {


    naver();
};
