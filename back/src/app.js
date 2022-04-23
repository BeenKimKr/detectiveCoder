const express = require("express");
const { userAuthRouter } = require("./routers/userRouter");
const { errorMiddleware } = require("./middlewares/errorMiddleware");

const passport = require("passport");
const passportConfig = require("./passport");

const app = express();
passportConfig();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
  req.accepts("application/json");
  next();
});

// 기본 페이지
app.get("/", (req, res) => {
  res.send("main page");
});

app.use("/users", userAuthRouter);
app.use(errorMiddleware);

module.exports = { app };
