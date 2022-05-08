const { TempModel } = require('../schemas/temp');

const Temp = {
  findAll: async () => {
    const temp = await TempModel.find({});
    return temp;
  },
  sortAll: async (column) => {
    const result = await TempModel.find({}).sort(column).limit(10);
    return result;
  },
};

module.exports = { Temp };
