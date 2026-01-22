require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('../models/Product');
const products = require('../../sample-data/products.json');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/productsearch');

const seedDB = async () => {
  try {
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log('Database seeded');
  } catch (error) {
    console.error(error);
  } finally {
    mongoose.connection.close();
  }
};

seedDB();