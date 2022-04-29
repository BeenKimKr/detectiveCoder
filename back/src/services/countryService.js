const { Country } = require("../db");

const countryService = {
  getData: async () => {
    const data = await Country.findAll();
    return data;
  },
  sortData: async (column) => {
    const data = await Country.sortAll(column);
    return data;
  },
};

module.exports = { countryService };
