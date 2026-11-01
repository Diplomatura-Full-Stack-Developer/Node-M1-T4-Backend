const express = require("express");
const { getUsers, getUserById, createUser, updateUserById, deleteUserById } = require("./user.controller");

const userRouter = express.Router();




userRouter.get("/users", getUsers);

userRouter.get("/users/:id", getUserById);

userRouter.post("/user", createUser);

userRouter.put("/user/:id", updateUserById);

userRouter.delete("/user/:id", deleteUserById);

module.exports = userRouter;