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
    if (Number(offset) === 12) {
      const result = await RankModel.find({})
        .select(`Ab Country ${column}`)
        .limit(12);
      return result;
    } else if (Number(offset) === 66) {
      const result = await RankModel.find({})
        .skip(Number(offset))
        .select(`Ab Country ${column}`)
        .limit(2);
      return result;
    } else {
      const result = await RankModel.find({})
        .skip(Number(offset))
        .select(`Ab Country ${column}`)
        .limit(3);
      return result;
    }
  },
};

module.exports = { Rank };
