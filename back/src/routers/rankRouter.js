const { Router } = require("express");
const { rankService } = require("../services/rankService");
const rankRouter = Router();

/**
 * @swagger
 * paths:
 *  /rank/all:
 *    get:
 *      summary: Get all data
 *      tags: [Rank]
 *      responses:
 *        "200":
 *          description: get all data
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Rank'
 */

rankRouter.get("/all", async (req, res, next) => {
  try {
    const data = await rankService.getAll();

    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
});

/**
 * @swagger
 * paths:
 *  /rank/one/:Country:
 *    get:
 *      summary: Get rank
 *      tags: [Rank]
 *      responses:
 *        "200":
 *          description: get rank selected by Country
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Rank'
 */

rankRouter.get("/one/:Country", async (req, res, next) => {
  try {
    const Country = req.params.Country;
    const data = await rankService.getOne(Country);

    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
});

/**
 * @swagger
 * paths:
 *  /rank/sort/:column:
 *    get:
 *      summary: Get rank
 *      tags: [Rank]
 *      responses:
 *        "200":
 *          description: get all rank data sorted by column
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Rank'
 */

rankRouter.get("/sort/:column/:offset", async (req, res, next) => {
  try {
    const column = req.params.column;
    const offset = req.params.offset;
    const data = await rankService.sortAll(column, offset);

    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
});

module.exports = { rankRouter };
