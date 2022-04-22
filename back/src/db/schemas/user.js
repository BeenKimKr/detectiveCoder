const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        birthday: {
            type: String,
            required: false,
        },
        badge: {
            type: Array,
            required: false
        },
    },
    {
        timestamps: true,
    }
);

const UserModel = model("User", UserSchema);

module.exports = { UserModel };
