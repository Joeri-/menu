const express = require('express');
const Recipe = require('../models/Recipe.js');

const router = express.Router();

const getRecipes = () => Recipe.find();

const addRecipe = (recipe) => {
  const newRecipe = new Recipe(recipe);
  return newRecipe.save();
};

router.get('/', async (req, res) => {
  const recipes = await getRecipes();
  res.status(200).send(recipes);
  res.end();
});

router.post('/', async (req, res) => {
  try {
    await addRecipe(req.body);
    res.status(200);
    res.end();
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
    res.end();
  }
});

module.exports = router;
