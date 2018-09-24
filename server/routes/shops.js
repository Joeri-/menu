const express = require('express');
const Shop = require('../models/Shop.js');
const logger = require('../config/logger.js');

const router = express.Router();

const getShops = () => Shop.find();

const addShop = (shop) => {
  const newShop = new Shop(shop);
  return newShop.save();
};

router.get('/', async (req, res) => {
  const shops = await getShops();
  res.status(200).send(shops);
  res.end();
});

router.post('/', async (req, res) => {
  try {
    await addShop(req.body);
    res.status(200);
    res.end();
  } catch (err) {
    logger.error(err);
    res.status(500).send(err);
    res.end();
  }
});

module.exports = router;
