const { Schema, model } = require('mongoose');

/**
 * @swagger
 *  components:
 *    schemas:
 *      Temp:
 *        type: object
 *        required:
 *          - Country
 *          - City
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
 *           _id: '626b916bc1aeb7c566f8f577'
 *           City: 'Abu Dhabi'
 *           Country: 'United Arab Emirates'
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

const TempSchema = new Schema(
  {
    City: {
      type: String,
      required: true,
    },
    Country: {
      type: String,
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

const TempModel = model('Temp', TempSchema);

module.exports = { TempModel };
