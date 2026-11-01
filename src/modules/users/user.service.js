const usersData = require("../../../assets/data/users.json");
const userModel = require("./user.model");


const getUsers = async () => {
  try {
    let users = await userModel.find();
    if (users.length === 0) {
      await seedUsers();
      users = await userModel.find();
    }
    return users;
  } catch (error) {
    throw new Error("Error al obtener los usuarios: " + error.message);
  }
};


const getUserById = async (id) => {
  try {
    const user = await userModel.findById(id);
    return user;
  } catch (error) {
    throw new Error("Error al obtener el usuario: " + error.message);
  }
};

const createUser = async (user) => {
  try {
    const newUser = await userModel.create(user);
    return newUser;
  } catch (error) {
    throw new Error("Error al crear el usuario: " + error.message);
  }
};

const updateUserById = async (id, body) => {
  try {
    const user = await userModel.findByIdAndUpdate(id, body);
    return user;
  } catch (error) {
    throw new Error("Error al actualizar el usuario: " + error.message);
  }
};

const deleteUserById = async (id) => {
  try {
    const user = await userModel.findByIdAndDelete(id);
    return user;
  } catch (error) {
    throw new Error("Error al eliminar el usuario: " + error.message);
  }
};

const seedUsers = async () => {
  try {
    usersData.forEach(async (user) => {
      const newUser = await createUser(user);
      if (!newUser) {
        throw new Error("Error al sembrar el usuario: " + user.id);
      }
    });
  } catch (error) {
    throw new Error("Error al sembrar los usuarios: " + error.message);
  }
};

module.exports = { getUsers, getUserById, createUser, updateUserById, deleteUserById };