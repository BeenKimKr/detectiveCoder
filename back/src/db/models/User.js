const { UserModel } = require("../schemas/user");

const User = {
  create: async (userInfo) => {
    const createdNewUser = await UserModel.create(userInfo);
    return createdNewUser;
  },

  findById: async ({ id }) => {
    const user = await UserModel.findOne({ id });
    return user;
  },

  update: async ({ id, updateObject }) => {
    const filter = { id };
    const update = { $set: updateObject };
    const option = { returnOriginal: false };

    const updatedUser = await UserModel.findOneAndUpdate(
      filter,
      update,
      option
    );
    return updatedUser;
  },

  deleteById: async ({ id }) => {
    const deleteUser = await UserModel.deleteOne({ id });
    const isDeleted = deleteUser.deletedCount === 1;
    return isDeleted;
  },
};

module.exports = { User };
