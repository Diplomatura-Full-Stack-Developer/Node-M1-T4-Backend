const express = require("express");

const { getCartById, createCart, updateCartById, deleteCartById } = require("./cart.controller");


const cartRouter = express.Router();


cartRouter.get("/cart/:id", getCartById);

cartRouter.post("/cart", createCart);

cartRouter.put("/cart/:id", updateCartById);

cartRouter.delete("/cart/:id", deleteCartById);

module.exports = cartRouter;