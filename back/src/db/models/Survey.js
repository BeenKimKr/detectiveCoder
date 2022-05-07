const { SurveyModel } = require('../schemas/survey');

const Survey = {
  create: async ({ newSurvey }) => {
    const createdNewSurvey = await SurveyModel.create(newSurvey);
    return createdNewSurvey;
  },

  findLatest: async () => {
    const Survey = await SurveyModel.findOne().sort({ createdAt: -1 });
    return Survey;
  },

  deleteById: async ({ id }) => {
    const deleteSurvey = await SurveyModel.deleteOne({ id });
    const isDeleted = deleteSurvey.deletedCount === 1;
    return isDeleted;
  },
};

module.exports = { Survey };
