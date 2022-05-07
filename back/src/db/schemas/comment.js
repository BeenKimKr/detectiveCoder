const { Schema, model } = require('mongoose');

/**
 * @swagger
 *  components:
 *    schemas:
 *      Rank:
 *        type: object
 *        required:
 *          - time
 *          - score
 *          - comment
 *        properties:
 *          time:
 *            type: String
 *            description: 등록 시간
 *          score:
 *            type: Number
 *            description: 점수
 *          comment:
 *            type: String
 *            description: 한줄평
 
 *        example:
 *           time: '2205080409'
 *           score: '5'
 *           comment: 'awesome :)'
 */

const CommentSchema = new Schema(
  {
    time: {
      type: String,
      required: true,
    },
    score: {
      type: Number,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const CommentModel = model('Comment', CommentSchema);

module.exports = { CommentModel };
