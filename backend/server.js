const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");

const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const orderRoutes = require("./routes/orderRoutes");

const { errorHandler, notFound } = require("./middleware/errorMiddleware");

const app = express();
app.use(express.json());
dotenv.config();
connectDB();

app.get("/", (req, res) => {
  res.send("API is running!");
});

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);

app.use(notFound);

app.use(errorHandler);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(
    `listening on port ${port} in ${process.env.NODE_ENV}....`.yellow.bold
  );
});
