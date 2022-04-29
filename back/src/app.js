const express = require("express");
const { swaggerUi, specs } = require("./swagger");
const passport = require("passport");
const passportConfig = require("./passport");
const { userAuthRouter } = require("./routers/userRouter");
const { countryRouter } = require("./routers/countryRouter");
const { tempRouter } = require("./routers/tempRouter");

const { errorMiddleware } = require("./middlewares/errorMiddleware");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
  req.accepts("application/json");
  next();
});
app.use("/swagger", swaggerUi.serve, swaggerUi.setup(specs));

// 기본 페이지
app.get("/", (req, res) => {
  res.send("main page");
});

passportConfig();
app.use(passport.initialize());
app.use("/users", userAuthRouter);
app.use("/happy", countryRouter);
app.use("/temp", tempRouter);
app.use(errorMiddleware);

module.exports = { app };
