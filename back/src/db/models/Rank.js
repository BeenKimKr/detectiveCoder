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
  findByColumn: async (column, offset) => {
    if (offset === 12) {
      const result = await RankModel.find({})
        .select(`Ab Country ${column}`)
        .limit(12);
      return result;
    }

    const result = await RankModel.find({})
      .skip(offset)
      .select(`Ab Country ${column}`)
      .limit(3);
    return result;
  },
};

module.exports = { Rank };
