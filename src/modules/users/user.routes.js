const express = require("express");
const { loginUser, registerUser } = require("./user.controller");

const userRouter = express.Router();



userRouter.post("/user/login", loginUser);

userRouter.post("/user/register", registerUser);



module.exports = userRouter;