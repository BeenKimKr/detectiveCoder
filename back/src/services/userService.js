const { User } = require('../db');
const { getProfile } = require('../utils/kakaoAuth');
const jwt = require('jsonwebtoken');

const userAuthService = {
  getKakaoUser: async ({ accessToken }) => {
    const user = await getProfile(accessToken);
    const userProfile = JSON.parse(user);
    const userId = userProfile.id;
    const exUser = await User.findById({ id: userId });

    const secretKey = process.env.JWT_SECRET_KEY || 'jwt-secret-key';
    const token = jwt.sign({ userId }, secretKey);

    if (exUser) {
      return { token, userInfo: exUser };
    } else {
      const userInfo = {
        id: userId,
        provider: 'kakao',
        name: userProfile.kakao_account.profile.nickname,
        email: userProfile.kakao_account.email,
        gender: userProfile.kakao_account.gender,
        age: userProfile.kakao_account.age_range,
        birthday: userProfile.kakao_account.birthday,
      };
      const newUser = await User.create(userInfo);
      return { token, userInfo: newUser };
    }
  },

  deleteUser: async ({ id }) => {
    const isDataDeleted = await User.deleteById({ id });

    if (!isDataDeleted) {
      throw new Error('사용자 정보가 없습니다. 다시 시도해주세요.');
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

    const badge = { ...user.badge, ...countryData };
    const updateObject = { badge };
    console.log(updateObject);
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
