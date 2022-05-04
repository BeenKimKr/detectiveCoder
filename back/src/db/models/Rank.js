const { RankModel } = require("../schemas/rank");

const Rank = {
  findAll: async () => {
    const result = await RankModel.find({});
    return result;
  },
  findByCountry: async (Country) => {
    const result = await RankModel.findOne({ Country: Country });
    return result;
  },
  findByColumn: async (column) => {
    const result = await RankModel.find({}).select(`Ab Country ${column}`);
    return result;
  },
};

module.exports = { Rank };
