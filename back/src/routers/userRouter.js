const { Router } = require('express');
const { userAuthService } = require('../services/userService');
const { login_required } = require('../middlewares/login_required');

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
 *  /auth/kakao:
 *    post:
 *      summary: Authorize user
 *      tags: [Users]
 *      responses:
 *        "201":
 *          description: Create or Get user info by using Kakao authorization server
 *          schema:
 *            $ref: '#/components/schemas/User'
 */
userAuthRouter.post("/auth/kakao", async (req, res, next) => {
  try {
    const { accessToken } = req.body;
    const user = await userAuthService.getKakaoUser({ accessToken });
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
});

/**
 * @swagger
 * paths:
 *  /users:
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
    const deletionStatus = await userAuthService.deleteUser({ id });
    res.status(200).json(deletionStatus);
  } catch (error) {
    next(error);
  }
});

module.exports = { userAuthRouter };
