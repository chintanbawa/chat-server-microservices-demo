import { Router } from "express";
import AuthController from "../controllers/AuthController";

const userRouter = Router();

userRouter.post("/v1/register", AuthController.register);
userRouter.post("/v1/login", AuthController.login);

export default userRouter;