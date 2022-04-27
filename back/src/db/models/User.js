const { UserModel } = require("../schemas/user");

const User = {
  create: async (newUser) => {
    const createdNewUser = await UserModel.create(newUser);
    return createdNewUser;
  },

  findById: async ({ id }) => {
    const user = await UserModel.findOne({ id });
    return user;
  },

  deleteById: async ({ id }) => {
    const deleteUser = await UserModel.deleteOne({ id });
    const isDeleted = deleteUser.deletedCount === 1;
    return isDeleted;
  }
};

module.exports = { User };
