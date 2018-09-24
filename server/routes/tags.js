const express = require('express');
const Tag = require('../models/Tag.js');

const router = express.Router();

const getTags = () => Tag.find();

const addTag = (tag) => {
  const newTag = new Tag(tag);
  return newTag.save();
};

router.get('/', async (req, res) => {
  const tags = await getTags();
  res.status(200).send(tags);
  res.end();
});

router.post('/', async (req, res) => {
  try {
    await addTag(req.body);
    res.status(200);
    res.end();
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
    res.end();
  }
});

module.exports = router;
