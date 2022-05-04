const { Router } = require('express');
const { login_required } = require('../middlewares/login_required');
const { userAuthService } = require('../services/userService');

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: API to manage users
 */
const userAuthRouter = Router();

// userAuthRouter.post('/auth/kakao', async (req, res, next) => {
//   accessToken = req.body.token;
//   userProfile = request.get(
//     'https://kapi.kakao.com/v2/user/me',
//     headers = { "Authorization": `Bearer ${accessToken}` },
//   );
// });

userAuthRouter.get("/current", async (req, res, next) => {
  try {
    const userId = req.session.userId;
    const currentUserInfo = await userAuthService.getUserInfo({
      userId,
    });
    console.log(currentUserInfo);
    console.log(req.ip);
    console.log(req.hostname);
    res.status(200).send(currentUserInfo);
  } catch (error) {
    next(error);
  }
});

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
