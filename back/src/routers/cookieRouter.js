const { Router } = require("express");
const { userAuthRouter } = require("../services/userService");

const cookieRouter = Router();

cookieRouter.get("/save", (req, res, next) => {
  const arr = [{ a: 1 }, { b: 2 }];
  const surveyResult = [...arr]; // array
  res.cookie(
    'surveyResult',
    surveyResult,
    { maxAge: 10000 }
  );
  res.json('saved cookie: ' + JSON.stringify(surveyResult));
});

cookieRouter.get("/read", (req, res, next) => {
  const surveyResult = req.cookies ?? 0;
  const result = Object.values(surveyResult);
  res.json(...result);
});

module.exports = { cookieRouter };
