const { Router } = require('express');
const { tempService } = require('../services/tempService.js');
const tempRouter = Router();

/**
 * @swagger
 * paths:
 *  /temp/all:
 *    get:
 *      summary: Get data
 *      tags: [Temp]
 *      responses:
 *        '200':
 *          description: get all data
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Temp'
 */

tempRouter.get('/all', async (req, res, next) => {
  try {
    const data = await tempService.getData();

    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
});

/**
 * @swagger
 * paths:
 *  /temp/{column}:
 *    get:
 *      summary: Get sorted data(by column)
 *      tags: [Temp]
 *      parameters:
 *        - in: path
 *          name: column
 *          required: true
 *          type: string
 *          description: The name of column
 *      responses:
 *        '200':
 *          description: Get sorted data(by column)
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Temp'
 */
tempRouter.get('/:column', async (req, res, next) => {
  try {
    const column = req.params.column;
    const data = await tempService.sortData(column);

    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
});

module.exports = { tempRouter };
