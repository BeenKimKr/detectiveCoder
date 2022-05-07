const { Temp } = require('../db');

const tempService = {
  getData: async () => {
    const data = await Temp.findAll();
    console.log(data);
    return data;
  },
  sortData: async (column) => {
    const data = await Temp.sortAll(column);
    return data;
  },
};

module.exports = { tempService };
