const { Schema, model } = require("mongoose");

/**
 * @swagger
 *  components:
 *    schemas:
 *      Survey:
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
 *            description: Name of Survey
 *          email:
 *            type: String
 *            description: Mail address
 *          gender:
 *            type: String
 *            description: Gender of Survey
 *          age:
 *            type: String
 *            description: Age of Survey
 *          birthday:
 *            type: String
 *            description: Birthday of Survey
 *          badge:
 *            type: Array
 *            description: Badges received by the Survey
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

const SurveySchema = new Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    temp: {
      type: Number,
      required: true,
    },
    answer: {
      type: Array,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const SurveyModel = model("Survey", SurveySchema);

module.exports = { SurveyModel };
