const { CountryModel } = require('../schemas/country');

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
    const { first, second, third, third_ } = columns;

    const dataFrame = await CountryModel.find({})
      .where('mean')
      .gt(temp - 4)
      .lt(temp + 4)
      .select(`Ab Country City ${first} ${second} ${third} ${third_}`);

    return dataFrame;
  },
};

module.exports = { Country };
