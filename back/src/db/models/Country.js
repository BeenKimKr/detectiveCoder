const { CountryModel } = require("../schemas/country");

const Country = {
  findAll: async () => {
    const country = await CountryModel.find({});
    console.log(country);
    return country;
  },
  findByCity: async (City) => {
    const result = await CountryModel.findOne({ City: City });
    console.log(result);
    return result;
  },
  findRankByCountry: async (Country) => {
    let dataFrame = await CountryModel.find({});
    let colArr = [
      "price",
      "GDP",
      "socialSupport",
      "HLE",
      "Freedom",
      "Generosity",
      "corruption",
      "score",
    ];

    rankMap = {};
    for (let i = 0; i < colArr.length; i++) {
      col = colArr[i];

      // column 기준 내림차순 정렬
      dataFrame.sort((a, b) => {
        return b[col] - a[col];
      });

      let dataSet = new Set();

      for (let j = 0; j < dataFrame.length; j++) {
        otherCountry = dataFrame[j]["Country"];
        dataSet.add(otherCountry);
        if (Country === otherCountry) {
          rankMap[col] = dataSet.size;

          console.log(rankMap);
          break;
        }
      }
    }
    return rankMap;
  },

  sortAll: async (columns) => {
    const temp = Number(columns[0]);
    const first = columns[1];
    const second = columns[2];
    const third = columns[3];
    const third_ = columns[4];

    const dataFrame = await CountryModel.find({})
      .where("mean")
      .gt(temp - 4)
      .lt(temp + 4)
      .select(`Ab Country City ${first} ${second} ${third} ${third_}`);

    let scoreArr = [];

    for (let i = 0; i < dataFrame.length; i++) {
      const f_score = dataFrame[i][first] * 2;
      const s_score = dataFrame[i][second] * 1.8;
      const t_score = (dataFrame[i][third] + dataFrame[i][third_]) * 1.6;

      scoreMap = {};
      scoreMap["Ab"] = dataFrame[i]["Ab"];
      scoreMap["Country"] = dataFrame[i]["Country"];
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
