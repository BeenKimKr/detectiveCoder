const { Rank } = require("../db");

const rankService = {
  getAll: async () => {
    const data = await Rank.findAll();
    return data;
  },
  getOne: async (Country) => {
    const data = await Rank.findByCountry(Country);
    return data;
  },
  sortAll: async (column, offset) => {
    const data = await Rank.findByColumn(column, offset);

    // column 기준 오름차순 정렬
    data.sort((a, b) => {
      return a[column] - b[column];
    });

    return data;
  },
};

module.exports = { rankService };
