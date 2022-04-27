const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'CountryGoGo API',
      version: '1.0.0',
      description: 'CountryGoGo API with express'
    },
    servers: [
      {
        url: `http://localhost:${process.env.SERVER_PORT}`
      },
    ],
  },
  apis: ['./src/db/schemas/*.js', './src/routers/*.js']
};

const specs = swaggerJsdoc(options);

module.exports = {
  swaggerUi,
  specs
};
