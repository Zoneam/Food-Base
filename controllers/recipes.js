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
    updateRecepie
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
function viewRecipes(req, res) {
  const dateNow = Date.now();
    Recipe.find({})
    .populate('user')
    .populate('like')
    .exec(function (err,recipes){
      recipes = recipes.reverse();
      res.render('index',{ recipes, dateNow });
    })
}
// Creating Recipe and Like than saving in database
async function saveRecipe(req, res) {
    req.body.user = req.user.id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    const newLike = await new Like();
    req.body.like = newLike;
    const recipe = await new Recipe(req.body);
    recipe.save( async function(err) {
      newLike.recipe = recipe._id;
      await newLike.save(function(err){
         if (err) return res.send(err);
        res.redirect('/recipes/myrecipes');
      });
    });
}
// Deleting recipes by id
function deleteRecipe({params: {id}},res) {
    Recipe.deleteOne({_id: id},function(err){
      res.redirect('myrecipes');
    });
  }
// Finding my recipes populating with likes schema and rendering
function myRecipes(req,res) {
    const dateNow = Date.now();
    Recipe.find({user: req.user.id})
    .populate('like')
    .exec(function (err,recipes){
      recipes = recipes.reverse();
      res.render('recipes/myrecipes', { recipes, dateNow })
    })
}
// Updating title of recipe
function updateRecepie(req,res){
    Recipe.findOneAndUpdate({_id: req.params.id}, { name:req.body.name },function(err, recipes){
      res.redirect('/recipes/myrecipes');
  })
}
