const { Router } = require('express');
const passport = require('passport');
const { userAuthService } = require('../services/userService');

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
userAuthRouter.get('/naver', passport.authenticate('naver'));

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
  '/naver/callback',
  passport.authenticate('naver', {
    failureRedirect: '/',
  }),
  (req, res) => {
    res.redirect('/');
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
userAuthRouter.get('/kakao', passport.authenticate('kakao'));

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
  '/kakao/callback',
  passport.authenticate('kakao', {
    failureRedirect: '/',
  }),
  (req, res) => {
    const userInfo = req.user._doc;
    res.status(200).json({ userInfo });
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
userAuthRouter.delete('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    await userAuthService.deleteUser({ id });
    res.status(200).send();
  } catch (error) {
    next(error);
  }
});

module.exports = { userAuthRouter };
