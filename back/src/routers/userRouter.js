const { Router } = require("express");
const { login_required } = require("../middlewares/login_required");
const { userAuthService } = require("../services/userService");

const userAuthRouter = Router();

userAuthRouter.post("/register", async (req, res, next) => {
    try {
        const { name, nickname, email, password } = req.body;
        await userAuthService.isExistUser({ email });
        const newUser = await userAuthService.addUser({
            name,
            nickname,
            email,
            password,
        });

        res.status(201).json(newUser);
    } catch (error) {
        next(error);
    }
});

userAuthRouter.post("/login", async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await userAuthService.getUser({ email, password });

        res.status(200).send(user);
    } catch (error) {
        next(error);
    }
});

userAuthRouter.get("/current", login_required, async (req, res, next) => {
    try {
        const userId = req.currentUserId;
        const currentUserInfo = await userAuthService.getUserInfo({
            userId,
        });

        res.status(200).send(currentUserInfo);
    } catch (error) {
        next(error);
    }
});

userAuthRouter.put("/:id", login_required, async (req, res, next) => {
    try {
        const userId = req.params.id;
        if (userId != req.currentUserId) {
            throw new Error("본인이 아니면 사용자 정보를 편집할 수 없습니다.");
        } else {
            const { nickname, description } = req.body;
            const toUpdate = { nickname, description };

            const updatedUser = await userAuthService.setUser({ userId, toUpdate });

            res.status(200).json(updatedUser);
        }
    } catch (error) {
        next(error);
    }
});

// get user info
userAuthRouter.get("/:id", login_required, async (req, res, next) => {
    try {
        const userId = req.params.id;
        const currentUserInfo = await userAuthService.getUserInfo({ userId });

        res.status(200).send(currentUserInfo);
    } catch (error) {
        next(error);
    }
});

userAuthRouter.delete("/:id", login_required, async (req, res, next) => {
    try {
        const userId = req.params.id;
        const result = await userAuthService.deleteUser({ userId });

        res.status(200).send(result);
    } catch (error) {
        next(error);
    }
});

module.exports = { userAuthRouter };
