const { Country } = require("../db");

const countryService = {
  getAll: async () => {
    const data = await Country.findAll();
    return data;
  },
  getOne: async (City) => {
    const data = await Country.findByCity(City);
    console.log(data);
    return data;
  },
  getRank: async (_Country) => {
    const data = await Country.findRankByCountry(_Country);
    return data;
  },
  sortData: async (column) => {
    const columns = column.split(",");
    const data = await Country.sortAll(columns);
    return data;
  },
};

module.exports = { countryService };
