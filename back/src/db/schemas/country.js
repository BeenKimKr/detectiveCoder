const { Schema, model } = require('mongoose');

/**
 * @swagger
 *  components:
 *    schemas:
 *      Country:
 *        type: object
 *        required:
 *          - Country
 *          - City
 *          - Ab
 *          - price
 *          - score
 *          - GDP
 *          - socialSupport
 *          - HLE
 *          - Freedom
 *          - Generosity
 *          - corruption
 *          - mean
 *          - min
 *          - low
 *          - middle
 *          - high
 *          - max
 *          - jan
 *          - feb
 *          - mar
 *          - apr
 *          - may
 *          - jun
 *          - jul
 *          - aug
 *          - sep
 *          - oct
 *          - nov
 *          - dec
 *
 *        properties:
 *          Country:
 *            type: String
 *            description: 국가명
 *          City:
 *            type: String
 *            description: 도시명
 *          Ab:
 *            type: String
 *            description: 약자
 *          price:
 *            type: Number
 *            description: 국가별 빅맥지수
 *          score:
 *            type: Number
 *            description: 국가별 행복지수
 *          GDP:
 *            type: Number
 *            description: 국가별 GDP
 *          socialSupport:
 *            type: Number
 *            description: 국가별 사회적 지원지수
 *          HLE:
 *            type: Number
 *            description: 국가별 기대수명
 *          Freedom:
 *            type: Number
 *            description: 국가별 삶의 자유도
 *          Generosity:
 *            type: Number
 *            description: 국가별 관대함
 *          corruption:
 *            type: Number
 *            description: 국가별 부패의 결여
 *          mean:
 *            type: Number
 *            description: 도시별 기온의 평균
 *          min:
 *            type: Number
 *            description: 도시별 기온의 최저값
 *          low:
 *            type: Number
 *            description: 도시별 기온의 하위 25%
 *          middle:
 *            type: Number
 *            description: 도시별 기온의 중앙값
 *          high:
 *            type: Number
 *            description: 도시별 기온의 상위 25%
 *          max:
 *            type: Number
 *            description: 도시별 기온의 최대값
 *          jan:
 *            type: Number
 *            description: 도시별 1월 평균기온
 *          feb:
 *            type: Number
 *            description: 도시별 2월 평균기온
 *          mar:
 *            type: Number
 *            description: 도시별 3월 평균기온
 *          apr:
 *            type: Number
 *            description: 도시별 4월 평균기온
 *          may:
 *            type: Number
 *            description: 도시별 5월 평균기온
 *          jun:
 *            type: Number
 *            description: 도시별 6월 평균기온
 *          jul:
 *            type: Number
 *            description: 도시별 7월 평균기온
 *          aug:
 *            type: Number
 *            description: 도시별 8월 평균기온
 *          sep:
 *            type: Number
 *            description: 도시별 9월 평균기온
 *          oct:
 *            type: Number
 *            description: 도시별 10월 평균기온
 *          nov:
 *            type: Number
 *            description: 도시별 11월 평균기온
 *          dec:
 *            type: Number
 *            description: 도시별 12월 평균기온
 *        example:
 *           _id: '6268f9e0414ae765ad3379b1'
 *           City: 'Fairbanks'
 *           Country: 'US'
 *           Freedom: 0.837
 *           GDP: 11.023
 *           Generosity: 0.098
 *           HLE: 68.2
 *           corruption: 0.698
 *           price: 5.67
 *           score: 6.951
 *           socialSupport: 0.92
 *           apr: 28.373668430335105
 *           aug: 36.093411845024754
 *           dec: 21.30759515275644
 *           feb: 21.078543083900232
 *           jan: 19.19455538487797
 *           jul: 35.88399044205496
 *           jun: 34.149902998236335
 *           mar: 23.972879330943844
 *           may: 32.29118450247482
 *           nov: 25.357610229276894
 *           oct: 30.156033452807648
 *           sep: 33.61469135802469
 *           max: 26.09722222222222
 *           low: 18.777777777777786
 *           high: 22.52222222222222
 *           mean: -1.3343436979053467
 *           middle: -0.4740740740740751
 *           min: -24.711111111111112
 */

const CountrySchema = new Schema(
  {
    Ab: {
      type: String,
      required: true,
    },
    City: {
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
    low: {
      type: Number,
      required: true,
    },
    middle: {
      type: Number,
      required: true,
    },
    high: {
      type: Number,
      required: true,
    },
    max: {
      type: Number,
      required: true,
    },
    mean: {
      type: Number,
      required: true,
    },
    min: {
      type: Number,
      required: true,
    },
    jan: {
      type: Number,
      required: true,
    },
    feb: {
      type: Number,
      required: true,
    },
    mar: {
      type: Number,
      required: true,
    },
    apr: {
      type: Number,
      required: true,
    },
    may: {
      type: Number,
      required: true,
    },
    jun: {
      type: Number,
      required: true,
    },
    jul: {
      type: Number,
      required: true,
    },
    aug: {
      type: Number,
      required: true,
    },
    sep: {
      type: Number,
      required: true,
    },
    oct: {
      type: Number,
      required: true,
    },
    nov: {
      type: Number,
      required: true,
    },
    dec: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const CountryModel = model('Country', CountrySchema);

module.exports = { CountryModel };
