const Recepie = require('../models/recepie');
const API_ID = "90925505";
const API_KEY = "9ff41c36cf0a827671bf6c51b5490f51";
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

module.exports = {
    searchRecepies,
    viewRecepies
  };


function viewRecepies(req, res) {
    console.log("RECEPIESSSSS")
    res.render('index');
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