const Cart = require("./cart.model");


const getCartByUserId = async (userId) => {
  const cart = await Cart.findOne({ userId });
  if (!cart) {
    return { cartId: '', products: [], total: 0, userId };
  }
  return {
    cartId: cart._id,
    products: cart.products,
    total: 0,
    userId: cart.userId,
  };
};

const createCart = async (userId, productId) => {
  try {

    const cart = await Cart.findOne({ userId });
    if (cart) {
      return addProductToCart(cart._id, productId);
    }
    const newCart = await Cart.create({ userId, products: [{ productId, quantity: 1 }] });
    return {
      cartId: newCart._id,
      products: newCart.products,
      total: 0,
      userId: newCart.userId,
    };
  } catch (error) {
    throw new Error(error.message);
  }
};

const addProductToCart = async (cartId, productId) => {
  const cart = await Cart.findById(cartId);
  if (!cart) {
    throw new Error("Carrito no encontrado");
  }
  const cartItem = cart.products.find((item) => String(item.productId) === String(productId));
  if (cartItem) {
    cartItem.quantity += 1;
  } else {
    cart.products.push({ productId, quantity: 1 });
  }
  await cart.save();
  return {
    cartId: cart._id,
    products: cart.products,
    total: 0,
    userId: cart.userId,
  };
};

const removeProductFromCart = async (cartId, productId) => {
  const cart = await Cart.findById(cartId);
  if (!cart) {
    throw new Error("Carrito no encontrado");
  }
  const cartItem = cart.products.find((item) => String(item.productId) === String(productId));
  if (!cartItem) {
    throw new Error("Producto no está en el carrito");
  }
  const quantity = cartItem.quantity;
  cart.products = cart.products.filter((item) => String(item.productId) !== String(productId));
  await cart.save();
  return {
    cartId: cart._id,
    products: cart.products,
    total: 0,
    userId: cart.userId,
    quantity,
  };
};


module.exports = { getCartByUserId, createCart, addProductToCart, removeProductFromCart };