const express = require("express");
const { welcomeProductAPI, getProducts, getProductById, createProduct, updateProductById, deleteProductById } = require("./product.controller");

const productRouter = express.Router();



productRouter.get("/", welcomeProductAPI);

productRouter.get("/products", getProducts);

productRouter.get("/products/:id", getProductById);

productRouter.post("/product", createProduct);

productRouter.put("/product/:id", updateProductById);

productRouter.delete("/product/:id", deleteProductById);

module.exports = productRouter;