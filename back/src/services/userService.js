const { User } = require("../db");
const jwt = require("jsonwebtoken");

const userAuthService = {
  addUser: async (user) => {
    const createdNewUser = await User.create(user);
    return createdNewUser;
  },

  getUser: async ({ id }) => {
    const user = await User.findById({ id });
    if (!user) {
      throw new Error('유저 정보가 없습니다. 다시 시도해주세요.');
    }

    const secretKey = process.env.JWT_SECRET_KEY || "jwt-secret-key";
    const token = jwt.sign({ userId: user.id }, secretKey);

    const loginUser = {
      ...user,
      token
    };
    return { loginUser };
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
