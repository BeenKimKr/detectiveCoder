const { Temp } = require('../db');

const tempService = {
  getData: async () => {
    const data = await Temp.findAll();
    return data;
  },
  sortData: async (column) => {
    const data = await Temp.sortAll(column);
    return data;
  },
};

module.exports = { tempService };
