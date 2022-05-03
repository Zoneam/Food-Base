const Recepie = require('../models/recepie');
const User = require('../models/user');
const API_ID = process.env.API_ID;
const API_KEY = process.env.API_KEY;
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

module.exports = {
    searchRecepies,
    viewRecepies,
    saveRecepie,
    deleteRecepie,
    myrecepies
  };


function viewRecepies(req, res) {

    Recepie.find({})
    .populate('user')
    .exec(function (err,recepies){
      console.log(recepies)
      res.render('index',{ recepies });
    })

}

function searchRecepies(req, res) {
    let foundRecepies = {};
    console.log("SEARCHIIIING")
    console.log("req.query",req.query)
    fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${req.query.search}&app_id=${API_ID}&app_key=${API_KEY}&random=true`)
    .then(res => res.json())
    .then(recepies => {
        foundRecepies = recepies.hits;
        console.log(foundRecepies)
        res.render('recepies/searchview', { foundRecepies });
    })
}

function saveRecepie(req, res) {
    req.body.user = req.user.id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;

    const recepie = new Recepie(req.body);
    recepie.save(function(err) {
      if (err) return res.redirect('/recepies');
    });
}

function deleteRecepie({params: {id}},res) {
    Recepie.deleteOne({_id: id},function(err){
      res.redirect('myrecepies');
    });
  }

  function myrecepies(req,res) {
    Recepie.find({user: req.user.id},function(err, recepies){
        res.render('recepies/myrecepies', { recepies })
    })
  }