const Recipe = require('../models/recipe');
const Like = require('../models/like');
const User = require('../models/user');

const API_ID = process.env.API_ID;
const API_KEY = process.env.API_KEY;
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

module.exports = {
    searchRecipes,
    viewRecipes,
    saveRecipe,
    deleteRecipe,
    myRecipes,
    updateRecepie
  };

function viewRecipes(req, res) {
    Recipe.find({})
    .populate('user')
    .populate('like')
    .exec(function (err,recipes){
      console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++',recipes);
      res.render('index',{ recipes });
    })

}

function searchRecipes(req, res) {
    let foundRecipes = {};
    fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${req.query.search}&app_id=${API_ID}&app_key=${API_KEY}&random=true`)
    .then(res => res.json())
    .then(recipes => {
        foundRecipes = recipes.hits;
        console.log(foundRecipes)
        res.render('recipes/searchview', { foundRecipes });
    })
}

async function saveRecipe(req, res) {
    req.body.user = req.user.id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    const newLike = new Like();
    req.body.like = newLike
    const recipe = new Recipe(req.body);
    recipe.save(function(err) {
      newLike.recipe = recipe._id;
      newLike.save()
      if (err) return res.redirect('/recipes');
    });
}

function deleteRecipe({params: {id}},res) {
    Recipe.deleteOne({_id: id},function(err){
      res.redirect('myrecipes');
    });
  }

  function myRecipes(req,res) {
    Recipe.find({user: req.user.id},function(err, recipes){
        res.render('recipes/myrecipes', { recipes })
    })
  }

  function updateRecepie(req,res){
    Recipe.findOneAndUpdate({_id: req.params.id}, { name:req.body.name },function(err, recipes){
      res.redirect('/recipes/myrecipes');
  })
  }
