const { SurveyModel } = require("../schemas/survey");

const Survey = {
  create: async ({ newSurvey }) => {
    const createdNewSurvey = await SurveyModel.create(newSurvey);
    return createdNewSurvey;
  },

  findById: async ({ id }) => {
    const Survey = await SurveyModel.findOne({ id });
    return Survey;
  },

  deleteById: async ({ id }) => {
    const deleteSurvey = await SurveyModel.deleteOne({ id });
    const isDeleted = deleteSurvey.deletedCount === 1;
    return isDeleted;
  },
};

module.exports = { Survey };
