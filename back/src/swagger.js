const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'CountryGoGo APIs',
            version: '1.0.0',
            description: 'CountryGoGo rest api using swagger and express'
        },
        servers: [
            {
                url: 'http://localhost:5001',
            },
        ],
    },
    apis: []
};

const specs = swaggerJsdoc(options);

module.exports = {
    swaggerUi,
    specs
};
