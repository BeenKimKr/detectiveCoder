const { Router } = require("express");
const { login_required } = require('../middlewares/login_required');
const passport = require("passport");
const { userAuthService } = require("../services/userService");

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: API to manage users
 */
const userAuthRouter = Router();

/**
 * @swagger
 * paths:
 *  /testlogin:
 *    get:
 *      summary: Getting Token
 *      tags: [Users]
 *      responses:
 *        "200":
 *          description: Getting Token
 *          schema:
 *            $ref: '#/components/schemas/User'
 */
userAuthRouter.get("/testlogin", async (req, res, next) => {
  try {
    const { id } = req.body;
    const user = await userAuthService.getUser({ id });
    const { token } = user;
    // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIyMjE0MTE4MDkyIiwiaWF0IjoxNjUxNTkyNTA0fQ.XZjdFcwtu4yQizys0Q99URxVN1jsp5aIL0gviOa6bKM
    res.send({ token });
  } catch (error) {
    next(error);
  }
});

/**
 * @swagger
 * paths:
 *  /users/naver:
 *    get:
 *      summary: Register using Naver
 *      tags: [Users]
 */
userAuthRouter.get("/naver", passport.authenticate("naver"));

/**
 * @swagger
 * paths:
 *  /users/naver/callback:
 *    get:
 *      summary: Get user
 *      tags: [Users]
 *      responses:
 *        "200":
 *          description: Callback for users logged in to Naver
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/User'
 */
userAuthRouter.get(
  "/naver/callback",
  passport.authenticate("naver", {
    failureRedirect: "/",
  }),
  (req, res) => {
    res.redirect("/");
  }
);

/**
 * @swagger
 * paths:
 *  /users/kakao:
 *    get:
 *      summary: Register using Kakao
 *      tags: [Users]
 */
userAuthRouter.get("/kakao", passport.authenticate("kakao"));

/**
 * @swagger
 * paths:
 *  /users/kakao/callback:
 *    get:
 *      summary: Get user
 *      tags: [Users]
 *      responses:
 *        "200":
 *          description: Callback for users logged in to Kakao
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/User'
 */
userAuthRouter.get(
  "/kakao/callback",
  passport.authenticate("kakao", {
    failureRedirect: "/",
  }),
  (req, res) => {
    res.redirect("/");
  }
);

/**
 * @swagger
 * paths:
 *  /users
 *    delete:
 *      summary: Delete user info
 *      tags: [Users]
 *      responses:
 *        "200":
 *          description: Delete user info
 *          schema:
 *            $ref: '#/components/schemas/User'
 */
userAuthRouter.delete('/', login_required, async (req, res, next) => {
  try {
    const id = req.currentUserId;
    const result = await userAuthService.deleteUser({ id });
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
});

/**
 * @swagger
 * paths:
 *  /badge:
 *    put:
 *      summary: Fix Badge Array
 *      tags: [Users]
 *      responses:
 *        "200":
 *          description: Put country name in Badge Array
 *          schema:
 *            $ref: '#/components/schemas/User'
 */
userAuthRouter.put('/badge', login_required, async (req, res, next) => {
  try {
    // 쿠키에 나라데이터 확인
    // 있으면 검색 후 저장, 없으면 설문 먼저 진행하세요 띄우기
    const id = req.currentUserId;
    const countryData = req.cookies.countryData ?? null;
    // testValue
    // const countryData = { Ab: 'BR' };

    const newBadge = await userAuthService.addBadge({ id, countryData });

    res.status(200).send(newBadge);
  } catch (error) {
    next(error);
  }
});

/**
 * @swagger
 * paths:
 *  /badge:
 *    get:
 *      summary: Get Badge Array
 *      tags: [Users]
 *      responses:
 *        "200":
 *          description: Get Badge Array of User Info
 *          schema:
 *            $ref: '#/components/schemas/User'
 */
userAuthRouter.get('/badge', login_required, async (req, res, next) => {
  try {
    const id = req.currentUserId;
    const badge = await userAuthService.getBadge({ id });

    res.status(200).send(badge);
  } catch (error) {
    next(error);
  }
});

module.exports = { userAuthRouter };
