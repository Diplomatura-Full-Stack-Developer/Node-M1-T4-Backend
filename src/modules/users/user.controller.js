const userService = require("./user.service");


const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userService.loginUser(email, password);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message, data: null });
  }
};


const registerUser = async (req, res) => {
  const user = req.body;
  try {
    const newUser = await userService.createUser(user);
    res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message, data: null });
  }
};



module.exports = { loginUser, registerUser };