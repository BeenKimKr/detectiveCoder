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
        host: 'localhost:5001',
        basePath: '/'
    },
    apis: ['./routers/*.js', './swagger/*']
};

const specs = swaggerJsdoc(options);

module.exports = {
    swaggerUi,
    specs
};
