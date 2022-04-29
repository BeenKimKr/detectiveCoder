const { Router } = require("express");
const { countryService } = require("../services/countryService.js");
const countryRouter = Router();

/**
 * @swagger
 * paths:
 *  /happy/all:
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

/**
 * @swagger
 * paths:
 *  /happy/:columns:
 *    get:
 *      summary: Get sorted data(by columns)
 *      tags: [Country]
 *      responses:
 *        "200":
 *          description: Get sorted data(by columns)
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Country'
 */
countryRouter.get("/:columns", async (req, res, next) => {
  try {
    const columns = req.params.columns;
    console.log(columns);
    const data = await countryService.sortData(columns);

    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
});

module.exports = { countryRouter };
