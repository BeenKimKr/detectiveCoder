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
    console.log(answer);
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

    const first = columns[1];
    const second = columns[2];
    const third = columns[3];
    const third_ = columns[4];

    const dataFrame = await Country.findBySurvey(columns);

    let tempDifArr = [];
    let tempArr = [];
    if (columns.includes("mean")) {
      for (let i = 0; i < dataFrame.length; i++) {
        let absTemp = Math.abs(temp - dataFrame[i]["mean"]);
        tempDifArr.push(absTemp);
      }

      let maxTempDif = Math.max(...tempDifArr);
      for (let i = 0; i < tempDifArr.length; i++) {
        let tempNum = 1 - tempDifArr[i] / maxTempDif;
        tempArr.push(tempNum);
      }
    }
    let scoreArr = [];

    for (let i = 0; i < dataFrame.length; i++) {
      const f_score =
        first === "mean" ? tempArr[i] * 2 : dataFrame[i][first] * 2;
      const s_score =
        second === "mean" ? tempArr[i] * 1.8 : dataFrame[i][second] * 1.8;
      const t_score =
        (third === "mean" ? tempArr[i] * 1.6 : dataFrame[i][third] * 1.6) +
        (third_ === "mean" ? tempArr[i] * 1.6 : dataFrame[i][third_] * 1.6);

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

module.exports = { countryService };
