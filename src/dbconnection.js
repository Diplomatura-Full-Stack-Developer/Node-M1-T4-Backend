const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();


const connectToMongoDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}curso_node_db`);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log(err);
  }
}

module.exports = connectToMongoDB;