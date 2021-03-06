const express = require('express');
const cors = require('cors');
const { swaggerUi, specs } = require('./utils/swagger');
const { commentRouter } = require('./routers/commentRouter');
const { countryRouter } = require('./routers/countryRouter');
const { rankRouter } = require('./routers/rankRouter');

const { errorMiddleware } = require('./middlewares/errorMiddleware');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  req.accepts('application/json');
  next();
});
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(specs));

// 기본 페이지
app.get('/', (req, res) => {
  res.send('main page');
});

app.use('/comment', commentRouter);
app.use('/country', countryRouter);
app.use('/rank', rankRouter);
app.use(errorMiddleware);

module.exports = { app };
