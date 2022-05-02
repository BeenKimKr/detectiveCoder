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
  sortData: async ({ temp, answer }) => {
    //temp는 온도, answer는 설문 array
    const columns = [temp, ...answer];
    const data = await Country.sortAll(columns);
    return data;
  },
};

module.exports = { countryService };
