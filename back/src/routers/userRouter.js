const { Router } = require('express');
const { login_required } = require('../middlewares/login_required');
const { userAuthService } = require('../services/userService');
const passport = require('passport');

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
userAuthRouter.get('/kakao',
  passport.authenticate('kakao'));

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
userAuthRouter.get('/kakao/callback',
  passport.authenticate('kakao', {
    failureRedirect: '/',
  }),
  (req, res) => {
    const userInfo = req.user._doc;
    req.session.userId = userInfo.id;
    console.log(req.session);
    res.redirect('http://localhost:3000/mainsurvey');
    // res.send(userInfo);
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
