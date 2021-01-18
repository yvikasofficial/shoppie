const mongoose = require("mongoose");
const dotenv = require("dotenv");
const colors = require("colors");

//RAW DATA
const users = require("./data/users");
const products = require("./data/products");

//MODELS
const User = require("./models/userModel");
const Product = require("./models/productModel");
const Order = require("./models/orderModel");

const connectDB = require("./config/db");
const e = require("express");

dotenv.config();
connectDB();

const importData = async () => {
  try {
    await Product.deleteMany();
    await Order.deleteMany();
    await User.deleteMany();

    const createdUser = await User.insertMany(users);
    const adminUser = createdUser[0]._id;

    const sampleProducts = products.map((product) => ({
      ...product,
      user: adminUser,
    }));

    await Product.insertMany(sampleProducts);
    console.log("Data Imported!".green.inverse);
    process.exit();
  } catch (error) {
    console.log(`${error}`.red.inverse);
    process.exit();
  }
};

const destroyData = async () => {
  try {
    await Product.deleteMany();
    await Order.deleteMany();
    await User.deleteMany();

    console.log("Data distroyed!".red.inverse);
    process.exit();
  } catch (error) {
    console.log(`${error}`.red.inverse);
    process.exit();
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
