const { Schema, model } = require('mongoose');

/**
 * @swagger
 *  components:
 *    schemas:
 *      User:
 *        type: object
 *        required:
 *          - id
 *          - provider
 *          - name
 *        properties:
 *          id:
 *            type: String
 *          provider:
 *            type: String
 *            description: Source of data
 *          name:
 *            type: String
 *            description: Name of user
 *          email:
 *            type: String
 *            description: Mail address
 *          gender:
 *            type: String
 *            description: Gender of user
 *          age:
 *            type: String
 *            description: Age of user
 *          birthday:
 *            type: String
 *            description: Birthday of user
 *          badge:
 *            type: Array
 *            description: Badges received by the user
 *        example:
 *           id: '6Ffds790H-hiOB8fdGd70F7sLg_dfFD90FI82'
 *           provider: 'naver'
 *           name: 'HongGilDong'
 *           email: 'none@abcdef.com'
 *           gender: 'male'
 *           age: '20~29'
 *           birthday: '0101'
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
    name: {
      type: String,
      required: true,
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
    badge: {
      type: Array,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const UserModel = model('User', UserSchema);

module.exports = { UserModel };
