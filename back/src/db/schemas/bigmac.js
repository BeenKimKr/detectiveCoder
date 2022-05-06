const { Schema, model } = require("mongoose");

/**
 * @swagger
 *  components:
 *    schemas:
 *      Bigmac:
 *        type: object
 *        required:
 *          - temp
 *          - answer
 *        properties:
 *          temp:
 *            type: Number
 *            description: temperature
 *          answer:
 *            type: Array
 *            description: Array of Bigmac result
 *        example:
 *           id: '6Ffds790H-hiOB8fdGd70F7sLg_dfFD90FI82'
 *           temp: 20
 *           answer: ["GDP", "HLE", "price", "Freedom"]
 */

const BigmacSchema = new Schema(
  {
    Country: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const BigmacModel = model("Bigmac", BigmacSchema);

module.exports = { BigmacModel };
