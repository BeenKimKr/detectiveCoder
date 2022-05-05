const { User } = require("../db");
const { getProfile } = require('../utils/kakaoAuth');
const jwt = require("jsonwebtoken");

const userAuthService = {
  getKakaoUser: async ({ accessToken }) => {
    const userProfile = await getProfile(accessToken);
    const userId = userProfile.id;
    const exUser = await User.findById({ id });

    const secretKey = process.env.JWT_SECRET_KEY || "jwt-secret-key";
    const token = jwt.sign({ userId }, secretKey);

    if (exUser) {
      return { token, exUser };
    } else {
      const userInfo = JSON.parse(userProfile.kakao_account);
      const newUser = await User.create(userInfo);
      return { token, newUser };
    }
  },

  deleteUser: async ({ id }) => {
    const isDataDeleted = await User.deleteById({ id });

    if (!isDataDeleted) {
      throw new Error(
        "사용자 정보가 없습니다. 다시 시도해주세요."
      );
    }
    return { status: "ok" };
  },

  addBadge: async ({ id, countryData }) => {
    const user = await User.findById({ id });
    if (!user) {
      throw new Error('유저 정보가 존재하지 않습니다. 로그인을 진행해주세요.');
    }
    if (countryData === null) {
      throw new Error('저장된 설문 결과가 없습니다. 설문을 먼저 진행해주세요.');
    }

    const countryAb = countryData.Ab;
    const badge = [...user.badge, countryAb];
    const updateObject = { badge };
    const updatedUser = await User.update({ id, updateObject });
    const updatedBadge = updatedUser.badge;
    return updatedBadge;
  },

  getBadge: async ({ id }) => {
    const user = await User.findById({ id });
    if (!user) {
      throw new Error('유저 정보가 존재하지 않습니다.');
    }

    const badge = user.badge;
    return badge;
  },

};

module.exports = { userAuthService };
