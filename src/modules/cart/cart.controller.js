const cartService = require("./cart.service");

const getCartById = async (req, res) => {
  const { id } = req.params;
  try {
    const cart = await cartService.getCartById(id);
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message, data: null });
  }
};

const createCart = async (req, res) => {
  const { userId } = req.user;
  const cart = req.body;
  try {
    const newCart = await cartService.createCart(userId, cart);
    res.status(200).json(newCart);
  } catch (error) {
    res.status(500).json({ message: error.message, data: null });
  }
};

const updateCartById = async (req, res) => {
  const { id } = req.params;
  const updateCart = req.body;
  try {
    const cart = await cartService.updateCartById(id, updateCart);
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message, data: null });
  }
};

const deleteCartById = async (req, res) => {
  const { id } = req.params;
  try {
    const cart = await cartService.deleteCartById(id);
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message, data: null });
  }
};

module.exports = { getCartById, createCart, updateCartById, deleteCartById };