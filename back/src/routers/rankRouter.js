const { Router } = require("express");
const { countryService } = require("../services/countryService.js");
const { surveyService } = require("../services/surveyService.js");
const { rankService } = require("../services/rankService");
const rankRouter = Router();

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

rankRouter.get("/all", async (req, res, next) => {
  try {
    const data = await rankService.getAll();

    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
});

rankRouter.get("/one/:Country", async (req, res, next) => {
  try {
    const Country = req.params.Country;
    const data = await rankService.getOne(Country);

    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
});

rankRouter.get("/sort/:column", async (req, res, next) => {
  try {
    const column = req.params.column;
    const data = await rankService.sortAll(column);

    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
});

module.exports = { rankRouter };
