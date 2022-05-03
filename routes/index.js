const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/', function(req, res, next) {
  res.redirect('/recepies');
});

// Google OAuth login route
router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));
// Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : 'recepies/',
    failureRedirect : 'recepies/'
  }
));

// OAuth logout route
router.get('/logout', function(req, res){
  req.logout();
  res.redirect('recepies/');
});

module.exports = router;
