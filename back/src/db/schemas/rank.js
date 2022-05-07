const { Schema, model } = require('mongoose');

/**
 * @swagger
 *  components:
 *    schemas:
 *      Rank:
 *        type: object
 *        required:
 *          - Rank
 *          - Ab
 *          - price
 *          - score
 *          - GDP
 *          - socialSupport
 *          - HLE
 *          - Freedom
 *          - Generosity
 *          - corruption
 *        properties:
 *          Rank:
 *            type: String
 *            description: 국가명
 *          Ab:
 *            type: String
 *            description: 약자
 *          price:
 *            type: Number
 *            description: 국가별 빅맥지수 순위( 순위가 높으면 물가가 저렴 )
 *          score:
 *            type: Number
 *            description: 국가별 행복지수 순위
 *          GDP:
 *            type: Number
 *            description: 국가별 GDP 순위
 *          socialSupport:
 *            type: Number
 *            description: 국가별 사회적 지원지수 순위
 *          HLE:
 *            type: Number
 *            description: 국가별 기대수명 순위
 *          Freedom:
 *            type: Number
 *            description: 국가별 삶의 자유도 순위
 *          Generosity:
 *            type: Number
 *            description: 국가별 관대함 순위
 *          corruption:
 *            type: Number
 *            description: 국가별 부패의 결여(청렴도) 순위
 
 *        example:
 *           _id: '6268f9e0414ae765ad3379b1'
 *           City: 'Fairbanks'
 *           Rank: 'US'
 *           Freedom: 2
 *           GDP: 11
 *           Generosity: 5
 *           HLE: 68
 *           corruption: 23
 *           price: 5
 *           score: 6
 *           socialSupport: 6
 */

const RankSchema = new Schema(
  {
    Ab: {
      type: String,
      required: true,
    },
    Country: {
      type: String,
      required: true,
    },
    Freedom: {
      type: Number,
      required: true,
    },
    Generosity: {
      type: Number,
      required: true,
    },
    HLE: {
      type: Number,
      required: true,
    },
    score: {
      type: Number,
      required: true,
    },
    GDP: {
      type: Number,
      required: true,
    },
    corruption: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    socialSupport: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const RankModel = model('Rank', RankSchema);

module.exports = { RankModel };
