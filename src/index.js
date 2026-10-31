const express = require("express");
const connectToMongoDB = require("./dbconnection");
const productRouter = require("./modules/products/product.routes");


const app = express();

app.use(express.json());

initServer = async () => {
  await connectToMongoDB();
  app.use(productRouter);
  app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });
}


initServer();