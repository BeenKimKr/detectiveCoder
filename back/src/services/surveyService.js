const { Survey } = require("../db");

const surveyService = {
  addSurvey: async ({ id, temp, answer }) => {
    const newSurvey = { id, temp, answer };

    const createdNewSurvey = await Survey.create({ newSurvey });
    createdNewSurvey.errorMessage = null;

    return createdNewSurvey;
  },
  getSurvey: async ({ id }) => {
    console.log(id);
    const survey = await Survey.findById({ id: id });
    console.log(survey);
    return survey;
  },
};

module.exports = { surveyService };
