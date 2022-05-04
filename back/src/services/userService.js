const { User } = require('../db');
const { getProfile } = require('../utils/kakaoAuth');
const jwt = require('jsonwebtoken');

const userAuthService = {
  getKakaoUser: async ({ accessToken }) => {
    const userProfile = await getProfile(accessToken);
    const userId = userProfile.id;
    const exUser = await User.findById({ id: userId });

    const secretKey = process.env.JWT_SECRET_KEY || 'jwt-secret-key';
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
      throw new Error('사용자 정보가 없습니다. 다시 시도해주세요.');
    }
    return { status: 'ok' };
  },
};

module.exports = { userAuthService };
