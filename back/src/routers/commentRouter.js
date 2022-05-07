const { Router } = require("express");
const { commentService } = require("../services/commentService");

const commentRouter = Router();

commentRouter.post('/', async (req, res, next) => {
  const { score, comment } = req.body;
  const createStatus = await commentService.addComment({ score, comment });

  res.status(201).json(createStatus);
});

commentRouter.get('/', async (req, res, next) => {
  const comments = await commentService.getComments();
  res.status(200).json(comments);
});

module.exports = { commentRouter };
