const { CountryModel } = require("../schemas/country");

const Country = {
  findAll: async () => {
    const country = await CountryModel.find({});
    console.log(country);
    return country;
  },
  sortAll: async (columns) => {
    const first = columns[0];
    const second = columns[1];
    const third = columns[2];

    const dataFrame = await CountryModel.find({}).select(
      `Ab City ${first} ${second} ${third}`
    );

    let scoreArr = [];

    for (let i = 0; i < dataFrame.length; i++) {
      const f_score = dataFrame[i][first] * 2;
      const s_score = dataFrame[i][second] * 1.8;
      const t_score = dataFrame[i][third] * 1.6;

      scoreMap = {};
      scoreMap["Ab"] = dataFrame[i]["Ab"];
      scoreMap["City"] = dataFrame[i]["City"];
      scoreMap["value"] = f_score + s_score + t_score;

      scoreArr[i] = scoreMap;
    }

    // value 기준 내림차순 정렬
    scoreArr.sort((a, b) => {
      return b.value - a.value;
    });

    console.log(scoreArr);
    const result = scoreArr[0];
    return result;
  },
};

module.exports = { Country };
