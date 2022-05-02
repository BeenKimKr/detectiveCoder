const { Survey } = require("../db");

const surveyService = {
  addSurvey: async ({ id, temp, answer }) => {
    const newSurvey = { id, temp, answer };

    const createdNewSurvey = await Survey.create({ newSurvey });
    createdNewSurvey.errorMessage = null;

    return createdNewSurvey;
  },
  getSurvey: async ({ id }) => {
    const survey = await Survey.findById({ id });
    return survey;
  },
};

module.exports = { surveyService };
