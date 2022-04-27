const { User } = require("../db");
const { v4: uuidv4 } = require("uuid");

const userAuthService = {
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
