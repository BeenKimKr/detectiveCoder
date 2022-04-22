const passport = require("passport");
const { User } = require("../db");
const { kakao } = require("./strategy/kakao");
const { naver } = require("./strategy/naver");

module.exports = () => {


    naver();
    kakao();
};
