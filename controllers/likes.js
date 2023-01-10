const  Like = require('../models/like');

module.exports = {
    like,
  };
// Liking or unliking recipe
async function like(req, res) {
    Like.findOne({recipe: req.params.id}, async function(err,found){
        if(!found.users.includes(req.user.id)){
            found.users.push(req.user.id);
            await found.save();
        } else {
            found.users.splice(found.users.indexOf(req.user.id),1)
            await found.save();
        }
    })
res.redirect('/recipes')
}