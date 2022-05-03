const { CountryModel } = require("../schemas/country");

const Country = {
  findAll: async () => {
    const country = await CountryModel.find({});
    return country;
  },
  findByCity: async (City) => {
    const result = await CountryModel.findOne({ City: City });
    return result;
  },
  findBySurvey: async (columns) => {
    let temp = 0;
    let first = "";
    let second = "";
    let third = "";
    let third_ = "";

    if (columns.length == 4) {
      temp = Number(columns[0]);
      first = columns[1];
      second = columns[2];
      third = columns[3];
    } else {
      temp = Number(columns[0]);
      first = columns[1];
      second = columns[2];
      third = columns[3];
      third_ = columns[4];
    }

    const dataFrame = await CountryModel.find({})
      .where("mean")
      .gt(temp - 4)
      .lt(temp + 4)
      .select(`Ab Country City ${first} ${second} ${third} ${third_}`);

    return dataFrame;
  },
};

module.exports = { Country };
