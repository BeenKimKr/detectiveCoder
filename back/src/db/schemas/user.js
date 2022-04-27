const { Schema, model } = require("mongoose");

/**
 * @swagger
 *  components:
 *    schemas:
 *      User:
 *        type: object
 *        required:
 *          - id
 *          - provider
 *        properties:
 *          id:
 *            type: String
 *          provider:
 *            type: String
 *            description: Source of data
 *          badge:
 *            type: Array
 *            description: Badges received by the user
 *        example:
 *           id: 6Ffds790H-hiOB8fdGd70F7sLg_dfFD90FI82
 *           provider: 'naver'
 *           badge: ['Germany', 'the United States']
 */

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
    nickname: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: false,
    },
    gender: {
      type: String,
      required: false,
    },
    age: {
      type: String,
      required: false,
    },
    birthday: {
      type: String,
      required: false,
    },
    name: {
      type: String,
      required: false,
    },
    phoneNumber: {
      type: String,
      required: false,
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
