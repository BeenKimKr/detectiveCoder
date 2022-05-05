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
    return { status: 'ok' };
  },
};

module.exports = { userAuthService };
