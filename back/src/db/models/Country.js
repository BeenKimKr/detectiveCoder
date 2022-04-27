const { CountryModel } = require("../schemas/country");

const Country = {
  findAll: async () => {
    const country = await CountryModel.find({});
    console.log(country);
    return country;
  },
  sortAll: async (column) => {
    console.log("model: ", column);
    const result = await CountryModel.find({})
      .sort("-" + column)
      .limit(10);
    console.log(result);
    return result;
  },
};

module.exports = { Country };
