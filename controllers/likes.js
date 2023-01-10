const  Like = require('../models/like');

module.exports = {
    like,
  };
// Liking or unliking recipe
async function like(req, res) {
    try {
      // Find the like object for the specified recipe
      const like = await Like.findOne({ recipe: req.params.id });
      if (!like.users.includes(req.user.id)) {
        // If the logged-in user has not liked the recipe, add their ID to the 'users' array
        like.users.push(req.user.id);
        await like.save();
      } else {
        // If the logged-in user has already liked the recipe, remove their ID from the 'users' array
        like.users.splice(like.users.indexOf(req.user.id), 1);
        await like.save();
      }
      // Redirect to the 'recipes' page
      res.redirect('/recipes');
    } catch (error) {
      // If an error occurred, send it back to the client
      res.send(error);
    }
  }
  