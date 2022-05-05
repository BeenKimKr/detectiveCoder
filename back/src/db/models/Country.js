const { CountryModel } = require("../schemas/country");

const Country = {
  findAll: async () => {
    const country = await CountryModel.find({});
    return country;
  },
  findByCity: async (City) => {
    const result = await CountryModel.findOne({ City: City });
    return result;
  },
  findBySurvey: async (columns) => {
    let temp = Number(columns[0]);
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
      let t_score = 0;
      if (columns.length == 4) {
        t_score = dataFrame[i][third] * 1.6;
      } else {
        t_score = (dataFrame[i][third] + dataFrame[i][third_]) * 1.6;
      }

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

    const result = [scoreArr[0], scoreArr[1], scoreArr[2]];
    return result;
  },
};

module.exports = { Country };
