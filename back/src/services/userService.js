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
      return false;
    }

    const secretKey = process.env.JWT_SECRET_KEY || "jwt-secret-key";
    const token = jwt.sign({ userId: user.id }, secretKey);

    const loginUser = {
      ...user,
      token
    };
    return loginUser;
  },

  deleteUser: async ({ id }) => {
    const isDataDeleted = await User.deleteById({ id });

    if (!isDataDeleted) {
      throw new Error(
        "사용자 정보가 없습니다. 다시 시도해주세요."
      );
    }
    return { status: "ok" };
  }
};

module.exports = { userAuthService };
