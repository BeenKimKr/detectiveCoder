const { Survey } = require("../db");

const surveyService = {
  addSurvey: async ({ id, temp, answer }) => {
    const newSurvey = { id, temp, answer };

    const createdNewSurvey = await Survey.create({ newSurvey });
    createdNewSurvey.errorMessage = null;

    return createdNewSurvey;
  },
};

module.exports = { surveyService };
