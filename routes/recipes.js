const express = require('express');
const router = express.Router();
const recipesCtrl = require('../controllers/recipes');
const isLoggedIn = require('../config/auth');

router.get('/', recipesCtrl.viewRecipes);
router.get('/search', recipesCtrl.searchRecipes);
router.post('/save',isLoggedIn, recipesCtrl.saveRecipe);
router.delete('/:id',isLoggedIn, recipesCtrl.deleteRecipe)
router.get('/myrecipes', isLoggedIn, recipesCtrl.myRecipes);
router.post('/myrecipes/:id/save', isLoggedIn, recipesCtrl.updateRecipe)

module.exports = router;

