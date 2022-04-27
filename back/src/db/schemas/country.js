const { Schema, model } = require("mongoose");

const CountrySchema = new Schema(
  {
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

const CountryModel = model("Country", CountrySchema);

module.exports = { CountryModel };
