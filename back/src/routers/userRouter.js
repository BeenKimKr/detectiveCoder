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
 *  /users/auth/kakao:
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
 *  /users/{id}:
 *    delete:
 *      summary: Delete user info
 *      tags: [Users]
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          type: string
 *          description: The user ID
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

/**
 * @swagger
 * paths:
 *  /users/badge:
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
    const { countryData } = req.cookies;
    const newBadge = await userAuthService.addBadge({ id, countryData });

    res.status(200).json(newBadge);
  } catch (error) {
    next(error);
  }
});

/**
 * @swagger
 * paths:
 *  /users/badge:
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

    res.status(200).json(badge);
  } catch (error) {
    next(error);
  }
});

module.exports = { userAuthRouter };
