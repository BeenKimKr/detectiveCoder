const { Router } = require('express');
const { countryService } = require('../services/countryService.js');
const { surveyService } = require('../services/surveyService.js');
const { rankService } = require('../services/rankService');
const countryRouter = Router();

/**
 * @swagger
 * paths:
 *  /country/all:
 *    get:
 *      summary: Get data
 *      tags: [Country]
 *      responses:
 *        '200':
 *          description: get all data
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Country'
 */
countryRouter.get('/all', async (req, res, next) => {
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
 *  /country/one/{City}:
 *    get:
 *      summary: Get one data
 *      tags: [Country]
 *      parameters:
 *        - in: path
 *          name: City
 *          required: true
 *          type: string
 *          description: The name of City
 *      responses:
 *        '200':
 *          description: get one data selected by City
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Country'
 */
countryRouter.get('/one/:City', async (req, res, next) => {
  try {
    const City = req.params.City;
    const data = await countryService.getOne(City);

    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
});

/**
 * @swagger
 * paths:
 *  /country/rank/{Country}:
 *    get:
 *      summary: Get rank
 *      tags: [Country]
 *      parameters:
 *        - in: path
 *          name: Country
 *          required: true
 *          type: string
 *          description: The name of Country
 *      responses:
 *        '200':
 *          description: get rank selected by Country
 *          content:
 *            application/json:
 *                schemas:
 */
//rankRouter에 /one 주소랑 중복기능
countryRouter.get('/rank/:Country', async (req, res, next) => {
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
 *  /country/price/{Country}:
 *    get:
 *      summary: Get price
 *      tags: [Country]
 *      parameters:
 *        - in: path
 *          name: Country
 *          required: true
 *          type: string
 *          description: The name of Country
 *      responses:
 *        '200':
 *          description: get price selected by Country
 *          content:
 *            application/json:
 *                schemas:
 */
countryRouter.get('/price/:Country', async (req, res, next) => {
  try {
    const Country = req.params.Country;
    const data = await countryService.getPrice(Country);

    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
});

countryRouter.post('/sort', async (req, res, next) => {
  try {
    res.header('Content-Type: application/json');

    const { temp, answer } = req.body;

    const result = await surveyService.addSurvey({ temp, answer });
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
 *  /country/sort:
 *    get:
 *      summary: Get sorted data(by id)
 *      tags: [Country]
 *      responses:
 *        '200':
 *          description: Get sorted data(by id)
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Country'
 */
countryRouter.get('/sort', async (req, res, next) => {
  try {
    const survey = await surveyService.getSurvey();
    const temp = Number(survey.temp);
    const answer = survey.answer;
    const data = await countryService.sortData({ temp, answer });

    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
});

module.exports = { countryRouter };
