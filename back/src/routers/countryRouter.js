const { Router } = require("express");
const { countryService } = require("../services/countryService.js");
const { surveyService } = require("../services/surveyService.js");
const { rankService } = require("../services/rankService");
const countryRouter = Router();

/**
 * @swagger
 * paths:
 *  /country/all
 *    get:
 *      summary: Get data
 *      tags: [Country]
 *      responses:
 *        "200":
 *          description: get all data
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Country'
 */

countryRouter.get("/all", async (req, res, next) => {
  try {
    const data = await countryService.getAll();

    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
});

/**
 * @swagger
 * paths:
 *  /country/one/:City
 *    get:
 *      summary: Get one data
 *      tags: [Country]
 *      responses:
 *        "200":
 *          description: get one data selected by City
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Country'
 */

countryRouter.get("/one/:City", async (req, res, next) => {
  try {
    const City = req.params.City;
    console.log(City);
    const data = await countryService.getOne(City);

    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
});

/**
 * @swagger
 * paths:
 *  /country/rank/:Country
 *    get:
 *      summary: Get rank
 *      tags: [Country]
 *      responses:
 *        "200":
 *          description: get rank selected by Country
 *          content:
 *            application/json:
 *                schemas:
 */

countryRouter.get("/rank/:Country", async (req, res, next) => {
  try {
    const Country = req.params.Country;
    console.log(Country);
    const data = await rankService.getOne(Country);

    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
});

countryRouter.post("/sort", async (req, res, next) => {
  try {
    res.header("Content-Type: application/json");

    const id = req.body.id;
    const temp = req.body.temp;
    const answer = req.body.answer;

    const result = await surveyService.addSurvey({ id, temp, answer });
    if (answer.errorMessage) {
      throw new Error(result.errorMessage);
    }

    res.status(201).json(result);
  } catch (e) {
    next(e);
  }
});

/**
 * @swagger
 * paths:
 *  /country/sort/:id
 *    get:
 *      summary: Get sorted data(by id)
 *      tags: [Country]
 *      responses:
 *        "200":
 *          description: Get sorted data(by id)
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Country'
 */

// 개발용 path ('/sort'로 변경 예정, answer는 req.body로 넘겨받는다.)
countryRouter.get("/sort/:id", async (req, res, next) => {
  try {
    // // const answer = req.body; (@권민님)
    const id = req.params.id;
    let survey = await surveyService.getSurvey({ id });

    const temp = survey.temp;
    const answer = survey.answer;

    const countryData = req.cookies.countryData ?? 0;
    let data;

    if (countryData === 0) {
      data = await countryService.sortData({ temp, answer });
      res.cookie("countryData", data, { maxAge: 3600 });
    } else {
      data = { ...countryData };
    }
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
});

module.exports = { countryRouter };
