import express from "express";
import userController from "../controller/user-controller.js";
import { authMiddleware } from "../middleware/auth-middleware.js";

const userRouter = new express.Router();

userRouter.use(authMiddleware);
userRouter.delete('/api/users/logout', userController.logout);

export {
    userRouter
}