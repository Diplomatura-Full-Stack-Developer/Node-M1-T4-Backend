const productModel = require("./product.model.js");

const getProducts = async () => {
  try {
    const products = await productModel.find();
    if (products.length === 0) {
      return {
        message: "No hay productos",
        data: null,
      };
    }
    return {
      message: "Productos obtenidos correctamente",
      data: products.map((product) => ({
        id: product.id,
        name: product.name,
        price: product.price,
      })),
    };
  } catch (error) {
    throw new Error("Error al obtener los productos: " + error.message);
  }
};


const getProductById = async (id) => {
  try {
    const product = await productModel.findOne({ id });
    if (!product) {
      throw new Error("Producto no encontrado: " + id);
    }
    return {
      message: "Producto obtenido correctamente",
      data: {
        id: product.id,
        name: product.name,
        price: product.price,
      },
    };
  } catch (error) {
    throw new Error("Error al obtener el producto: " + error.message);
  }
};


const createProduct = async (name, price) => {
  try {
    const product = await productModel.create({ name, price });
    if (!product) {
      return {
        message: "Error al crear el producto",
        data: null,
      };
    }
    return {
      message: "Producto creado correctamente",
      data: {
        id: product.id,
        name: product.name,
        price: product.price,
      },
    };
  } catch (error) {
    throw new Error("Error al crear el producto: " + error.message);
  }
};


const updateProductById = async (id, name, price) => {
  try {
    const product = await productModel.findOneAndUpdate({ id }, { name, price });
    if (!product) {
      throw new Error("Error al actualizar el producto: " + id);
    }
    return {
      message: "Producto actualizado correctamente",
      data: {
        id: product.id,
        name: product.name,
        price: product.price,
      },
    };
  } catch (error) {
    throw new Error("Error al actualizar el producto: " + error.message);
  }
};

const deleteProductById = async (id) => {
  try {
    const product = await productModel.findOneAndDelete({ id });
    if (!product) {
      return {
        message: "Error al eliminar el producto: " + id,
        data: null,
      };
    }
    return {
      message: "Producto eliminado correctamente",
      data: {
        id: product.id,
        name: product.name,
        price: product.price,
      },
    };
  } catch (error) {
    throw new Error("Error al eliminar el producto: " + error.message);
  }
};

module.exports = { getProducts, getProductById, createProduct, deleteProductById, updateProductById };