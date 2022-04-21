const { UserModel } = require("../schemas/user");

const User = {
  create: async ({ newUser }) => {
    const createdNewUser = await UserModel.create(newUser);
    return createdNewUser;
  },

  findByEmail: async ({ email }) => {
    const user = await UserModel.findOne({ email });
    return user;
  },

  findById: async ({ userId }) => {
    const user = await UserModel.findOne({ id: userId });
    return user;
  },

  findAll: async () => {
    const users = await UserModel.find({}).sort({ nickname: 1 }); // 사용자들 오름차순 정렬
    return users;
  },

  update: async ({ userId, updateObject }) => {
    const filter = { id: userId };
    const update = { $set: updateObject };
    const option = { returnOriginal: false };

    const updatedUser = await UserModel.findOneAndUpdate(
      filter,
      update,
      option
    );
    return updatedUser;
  },

  deleteById: async ({ userId }) => {
    const deleteResult = await UserModel.deleteOne({ id: userId });
    const isDataDeleted = deleteResult.deletedCount === 1;
    return isDataDeleted;
  },
};

module.exports = { User };
