const { CommentModel } = require('../schemas/comment');

const Comment = {
  create: async ({ newComment }) => {
    const createdComment = await CommentModel.create(newComment);
    return createdComment;
  },
  findAll: async () => {
    const result = await CommentModel.find({}).sort({ time: -1 });
    return result;
  }
};

module.exports = { Comment };
