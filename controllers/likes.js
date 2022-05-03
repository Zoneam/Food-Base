const { Like }  = require('../models/recipe');

module.exports = {
    like,
  };
 
function like(req, res) {

Like.findOne({recipeId: req.params.id}, function(err,found){
    if(found){
        if(!found.users.includes(req.user.id)){
            found.users.push(req.user.id);
            found.save();
        } else {
            found.users.splice(found.users.indexOf(req.user.id),1)
            found.save();
        }
    }
    else {
        const newLike = new Like();
        newLike.recipeId = req.params.id;
        newLike.users.push(req.user.id)
        newLike.save();          
    }
})

}