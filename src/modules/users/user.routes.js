const express = require("express");
const { getUsers, getUserById, createUser, updateUserById, deleteUserById, loginUser } = require("./user.controller");

const userRouter = express.Router();



userRouter.post("/user/login", loginUser);

userRouter.post("/user", createUser);

userRouter.get("/users", getUsers);

userRouter.get("/users/:id", getUserById);


userRouter.put("/user/:id", updateUserById);

userRouter.delete("/user/:id", deleteUserById);


module.exports = userRouter;