const { BigmacModel } = require("../schemas/Bigmac");

const Bigmac = {
  findByCountry: async (Country) => {
    const result = await BigmacModel.findOne({ Country: Country });
    return result;
  },
};

module.exports = { Bigmac };
