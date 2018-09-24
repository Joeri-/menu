const express = require('express');
const Product = require('../models/Product.js');

const router = express.Router();

const getProducts = () => Product.find();

const addProduct = (product) => {
  const newProduct = new Product(product);
  return newProduct.save();
};

router.get('/', async (req, res) => {
  const products = await getProducts();
  res.status(200).send(products);
  res.end();
});

router.post('/', async (req, res) => {
  try {
    await addProduct(req.body);
    res.status(200);
    res.end();
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
    res.end();
  }
});

module.exports = router;
