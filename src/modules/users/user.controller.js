const userService = require("./user.service");


const getUsers = async (req, res) => {
  try {
    const users = await userService.getUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message, data: null });
  }
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userService.getUserById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message, data: null });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userService.loginUser(email, password);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message, data: null });
  }
};

const createUser = async (req, res) => {
  const user = req.body;
  try {
    const newUser = await userService.createUser(user);
    res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message, data: null });
  }
};

const updateUserById = async (req, res) => {
  const { id } = req.params;
  const updateUser = req.body;
  try {
    const user = await userService.updateUserById(id, updateUser);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message, data: null });
  }
};

const deleteUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userService.deleteUserById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message, data: null });
  }
};

module.exports = { getUsers, getUserById, createUser, updateUserById, deleteUserById, loginUser };