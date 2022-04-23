const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
    },
    provider: {
      type: String,
      required: true,
    },
    badge: {
      type: Array,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const UserModel = model("User", UserSchema);

module.exports = { UserModel };
