const { Router } = require("express");
const login_required = require('../middlewares/login_required');
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
 *  /users/:id:
 *    delete:
 *      summary: Delete user info
 *      tags: [Users]
 *      responses:
 *        "200":
 *          description: Delete user info
 *          schema:
 *            $ref: '#/components/schemas/User'
 */
userAuthRouter.delete("/:id", login_required, async (req, res, next) => {
  try {
    const userId = req.currentUserId;
    await userAuthService.deleteUser({ id });
    res.status(200).send();
  } catch (error) {
    next(error);
  }
});

userAuthRouter.get('/badge', login_required, (req, res, next) => {
  try {
    const id = req.currentUserId;
    const badge = await userAuthService.getBadge({ id });
    res.status(200).send(badge);
  } catch (error) {
    next(error);
  }
});

module.exports = { userAuthRouter };
