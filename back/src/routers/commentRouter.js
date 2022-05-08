const { Router } = require('express');
const { commentService } = require('../services/commentService');

const commentRouter = Router();

commentRouter.post('/', async (req, res, next) => {
  try {
    const { score, comment } = req.body;
    const createStatus = await commentService.addComment({ score, comment });

    res.status(201).json(createStatus);
  } catch (error) {
    next(error);
  }
});

commentRouter.get('/', async (req, res, next) => {
  try {
    const comments = await commentService.getComments();
    res.status(200).send(comments);
  } catch (error) {
    next(error);
  }
});

module.exports = { commentRouter };
