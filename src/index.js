const express = require("express");
const connectToMongoDB = require("./dbconnection");
const productRouter = require("./modules/products/product.routes");
const userRouter = require("./modules/users/user.routes");
const cartRouter = require("./modules/cart/cart.routes");
const cors = require("cors");

const app = express();
app.use(cors({
  origin: 'https://angular-m1-t4.web.app',
  methods: ['GET', 'POST', 'PUT', 'DELETE']
}));

app.use(express.json());

initServer = async () => {
  await connectToMongoDB();
  app.use(productRouter, userRouter, cartRouter);
  app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });
}


initServer();