const { Router } = require("express");
const { countryService } = require("../services/countryService.js");
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
    const data = await countryService.getRank(Country);

    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
});

/**
 * @swagger
 * paths:
 *  /country/sort/:columns
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
// 개발용 path ('/sort'로 변경 예정, columns는 req.body로 넘겨받는다.)
countryRouter.get("/sort/:columns", async (req, res, next) => {
  try {
    // const columns = req.body; (@권민님)
    const columns = req.params.columns;
    const countryData = req.cookies.countryData ?? 0;
    let data;

    if (countryData === 0) {
      data = await countryService.sortData(columns);
      res.cookie(
        'countryData',
        data,
        { maxAge: 3600 }
      );
    } else {
      data = { ...countryData };
    }

    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
});

module.exports = { countryRouter };
