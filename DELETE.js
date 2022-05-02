var express = require('express');
var router = express.Router();
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

let jokeData = {};
/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("req.query",req.query)
fetch('https://api.chucknorris.io/jokes/random')
.then(res => res.json())
.then(res =>{
  jokeData.joke = res.value;
  return fetch('https://api.chucknorris.io/jokes/categories');
})
.then(res => res.json())
.then(cat => {
  jokeData.categories = cat;
  console.log(jokeData)
  res.render('index', { jokeData });
})
});

module.exports = router;
