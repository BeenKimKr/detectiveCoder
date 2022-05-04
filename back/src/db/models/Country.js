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
    let temp = Number(columns[0]);
    const first = columns[1];
    const second = columns[2];
    const third = columns[3];
    const third_ = columns[4];

    if (columns.includes("temperature")) {
      let dataFrame = await CountryModel.find({})
        .where("mean")
        .gt(temp - 4)
        .lt(temp + 4)
        .select(`Ab Country City ${first} ${second} ${third} ${third_}`);

      return dataFrame;
    } else {
      const dataFrame = await CountryModel.find({})
        .where("mean")
        .gt(temp - 4)
        .lt(temp + 4)
        .select(`Ab Country City ${first} ${second} ${third} ${third_}`);

      return dataFrame;
    }
  },
};

module.exports = { Country };
