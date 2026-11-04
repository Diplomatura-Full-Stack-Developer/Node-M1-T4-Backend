const express = require("express");

const { getCartByUserId, createCart, addProductToCart, removeProductFromCart } = require("./cart.controller");


const cartRouter = express.Router();


cartRouter.get("/cart/:id", getCartByUserId);

cartRouter.post("/cart", createCart);

cartRouter.post("/cart/:id/products", addProductToCart);

cartRouter.delete("/cart/:id/products/:productId", removeProductFromCart);


module.exports = cartRouter;