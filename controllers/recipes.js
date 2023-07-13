const Recipe = require('../models/recipe');
const Like = require('../models/like');
const API_ID = process.env.API_ID;
const API_KEY = process.env.API_KEY;
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

// Exporting functions
module.exports = {
    searchRecipes,
    viewRecipes,
    saveRecipe,
    deleteRecipe,
    myRecipes,
    updateRecipe
  };
  
// Fetching Edamam API and rendering
function searchRecipes(req, res) {
    let foundRecipes = {};
    fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${req.query.search}&app_id=${API_ID}&app_key=${API_KEY}&random=true`)
    .then(res => res.json())
    .then(recipes => {
        foundRecipes = recipes.hits;
        res.render('recipes/searchview', { foundRecipes });
    })
}

// Finding all recipes populating users and likes and rendering
async function viewRecipes(req, res) {
  try {
    const dateNow = Date.now();
    const recipes = await Recipe.find({})
      .populate('user')
      .populate('like')
      .exec();
    recipes.reverse();
    res.render('index', { recipes, dateNow });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error loading recipes');
  }
}

// Creating Recipe and Like than saving in database
async function saveRecipe(req, res) {
  try {
    // Assign the user's information to the request body
    req.body.user = req.user.id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    // Create a new like object
    const newLike = new Like();
    // Assign the like object to the request body
    req.body.like = newLike;
    // Create a new recipe object
    const recipe = new Recipe(req.body);
    // Save the recipe to the database
    await recipe.save();
    // Assign the recipe's ID to the like object
    newLike.recipe = recipe._id;
    // Save the like object to the database
    await newLike.save();
    // Redirect to the 'myrecipes' page
    res.redirect('/recipes/myrecipes');
  } catch (error) {
    // If an error occurred, send it back to the client
    res.send(error);
  }
}

// Deleting recipes by id
async function deleteRecipe(req, res) {
  try {
    // Get the ID of the recipe to delete from the request params
    const { id } = req.params;
    // Delete the recipe with the specified ID
    await Recipe.deleteOne({ _id: id });
    // Redirect to the 'myrecipes' page
    res.redirect('myrecipes');
  } catch (error) {
    // If an error occurred, send it back to the client
    res.send(error);
  }
}

// Finding my recipes populating with likes schema and rendering
async function myRecipes(req, res) {
  try {
    // Get the current date
    const dateNow = Date.now();
    // Find all recipes for the logged-in user
    const recipes = await Recipe.find({ user: req.user.id })
      .populate('like')
      .exec();
    // Reverse the order of the recipes
    recipes.reverse();
    // Render the 'myrecipes' template and pass in the recipes and current date
    res.render('recipes/myrecipes', { recipes, dateNow });
  } catch (error) {
    // If an error occurred, send it back to the client
    res.send(error);
  }
}

// Updating title of recipe
async function updateRecipe(req, res) {
  try {
    // Find the recipe with the specified ID and update its name
    const recipe = await Recipe.findOneAndUpdate({ _id: req.params.id }, { name: req.body.name });
    // Redirect to the 'myrecipes' page
    res.redirect('/recipes/myrecipes');
  } catch (error) {
    // If an error occurred, send it back to the client
    res.send(error);
  }
}