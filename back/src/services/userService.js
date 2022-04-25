const { User } = require("../db");
const { v4: uuidv4 } = require("uuid");

const userAuthService = {
    addUser: async ({ name, email }) => {
        const id = uuidv4();
        const newUser = { id, email, name };
        const createdNewUser = await User.create({ newUser });
        return createdNewUser;
    }
};

module.exports = { userAuthService };
