const productService = require("./product.service");

const welcomeProductAPI = (req, res) => {
  res.status(200).json({ message: "Bienvenido a la API de productos" });
};

const getProducts = async (req, res) => {
  try {
    const products = await productService.getProducts();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message, data: null });
  }
};

const getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await productService.getProductById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message, data: null });
  }
};

const createProduct = async (req, res) => {
  const { name, price } = req.body;
  try {
    const product = await productService.createProduct(name, price);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message, data: null });
  }
};

const updateProductById = async (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  try {
    const product = await productService.updateProductById(id, name, price);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message, data: null });
  }
};

const deleteProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await productService.deleteProductById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message, data: null });
  }
};

module.exports = { welcomeProductAPI, getProducts, getProductById, createProduct, updateProductById, deleteProductById };