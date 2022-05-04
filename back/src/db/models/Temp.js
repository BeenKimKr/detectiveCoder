const { TempModel } = require("../schemas/temp");

const Temp = {
  findAll: async () => {
    const temp = await TempModel.find({});
    console.log(temp);
    return temp;
  },
  sortAll: async (column) => {
    const result = await TempModel.find({}).sort(column).limit(10);
    console.log(result);
    return result;
  },
};

module.exports = { Temp };
