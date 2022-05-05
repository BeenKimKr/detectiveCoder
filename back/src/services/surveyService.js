const { Survey } = require("../db");

const surveyService = {
  addSurvey: async ({ temp, answer }) => {
    const newSurvey = { temp, answer };

    const createdNewSurvey = await Survey.create({ newSurvey });
    createdNewSurvey.errorMessage = null;

    return createdNewSurvey;
  },
  getSurvey: async () => {
    const survey = await Survey.findLatest();
    return survey;
  },
};

module.exports = { surveyService };
