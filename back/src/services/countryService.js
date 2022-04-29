const { Country } = require("../db");

const countryService = {
  getData: async () => {
    const data = await Country.findAll();
    return data;
  },
  sortData: async (column) => {
    const columns = column.split(",");
    const data = await Country.sortAll(columns);
    return data;
  },
};

module.exports = { countryService };
