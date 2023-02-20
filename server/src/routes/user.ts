import express from "express";

import {
  createUserController,
  deleteUserController,
  findAllUsersController,
  findOneUserController,
  updateUserController,
} from "../controllers/UserController";

const userRouter = express.Router();

userRouter.post("/create-user", createUserController);
userRouter.get("/find-all-users", findAllUsersController);
userRouter.get("/find-one-user/:id", findOneUserController);
userRouter.patch("/update-user/:id", updateUserController);
userRouter.delete("/delete-user/:id", deleteUserController);

export default userRouter;
