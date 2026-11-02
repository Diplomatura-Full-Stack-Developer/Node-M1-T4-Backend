const Cart = require("./cart.model");

const getCartById = async (id) => {
  try {
    const cart = await Cart.findById(id);
    return cart;
  } catch (error) {
    throw new Error(error.message);
  }
};

const createCart = async (userId, cart) => {
  try {
    const newCart = await Cart.create({ userId, ...cart });
    return newCart;
  } catch (error) {
    throw new Error(error.message);
  }
};

const updateCartById = async (id, cart) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(id, cart, { new: true });
    return updatedCart;
  } catch (error) {
    throw new Error(error.message);
  }
};

const deleteCartById = async (id) => {
  try {
    const deletedCart = await Cart.findByIdAndDelete(id);
    return deletedCart;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { getCartById, createCart, updateCartById, deleteCartById };