const { BigmacModel } = require('../schemas/bigmac');

const Bigmac = {
  findByCountry: async (Country) => {
    const result = await BigmacModel.findOne({ Country });
    return result;
  },
};

module.exports = { Bigmac };
