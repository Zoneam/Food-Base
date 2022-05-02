const Recepie = require('../models/recepie');

module.exports = {
    // searchRecepie,
    viewRecepies
  };


  

function viewRecepies(req, res) {
    console.log("RECEPIESSSSS")
    res.render('index');
}