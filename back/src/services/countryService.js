const { Country } = require("../db");

const countryService = {
  getAll: async () => {
    const data = await Country.findAll();
    return data;
  },
  getOne: async (City) => {
    const data = await Country.findByCity(City);
    return data;
  },
  sortData: async ({ temp, answer }) => {
    //temp는 온도, answer는 설문 array

    let m = {};
    for (let i = 0; i < answer.length; i++) {
      let column = answer[i];
      let count = answer.filter((element) => answer[i] === element).length;
      m[column] = count;
    }

    let priorityArr = Object.entries(m);
    priorityArr.sort((a, b) => b[1] - a[1]);

    let priority = [];
    for (let i = 0; i < priorityArr.length; i++) {
      priority.push(priorityArr[i][0]);
    }

    const columns = [temp, ...priority];
    // columns => [ 24, 'socialSupport', 'GDP', 'Freedom', 'HLE' ]

    const dataFrame = await Country.findBySurvey(columns);

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

    const result = scoreArr[0];
    return result;
  },
};

module.exports = { countryService };
