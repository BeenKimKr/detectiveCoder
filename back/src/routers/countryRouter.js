const { Router } = require("express");
const { countryService } = require("../services/countryService.js");
const countryRouter = Router();

/**
 * @swagger
 * paths:
 *  /survey/all:
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
    const data = await countryService.getData();

    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
});

countryRouter.get("/:column", async (req, res, next) => {
  try {
    const column = req.params.column;
    console.log(column);
    const data = await countryService.sortData(column);

    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
});

module.exports = { countryRouter };
