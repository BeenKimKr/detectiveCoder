const { Router } = require("express");
const { countryService } = require("../services/countryService.js");
const { surveyService } = require("../services/surveyService.js");
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

countryRouter.get("/one", async (req, res, next) => {
  try {
    const City = req.body.City;
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
countryRouter.get("/rank", async (req, res, next) => {
  try {
    const Country = req.body.Country;
    console.log(Country);
    const data = await countryService.getRank(Country);

    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
});

/**
 * @swagger
 * paths:
 *  /country/sort/:answer
 *    get:
 *      summary: Get sorted data(by answer)
 *      tags: [Country]
 *      responses:
 *        "200":
 *          description: Get sorted data(by answer)
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Country'
 */
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

// 개발용 path ('/sort'로 변경 예정, answer는 req.body로 넘겨받는다.)
countryRouter.get("/sort", async (req, res, next) => {
  try {
    // // const answer = req.body; (@권민님)
    const temp = req.body.temp;
    const answer = req.body.answer;

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
