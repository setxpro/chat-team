import express from "express";
import { forgetPasswordController, signInController } from "../controllers/SignInController";

const authRouter = express.Router();

authRouter.post('/signin', signInController);

authRouter.post('/forget-pass', forgetPasswordController);

export default authRouter;