const { Country } = require("../db");

const countryService = {
  getAll: async () => {
    const data = await Country.findAll();
    return data;
  },
  getOne: async (City) => {
    const data = await Country.findByCity(City);
    console.log(data);
    return data;
  },
  getRank: async (_Country) => {
    const data = await Country.findRankByCountry(_Country);
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
    console.log(columns);
    const data = await Country.sortAll(columns);
    return data;
  },
};

module.exports = { countryService };
