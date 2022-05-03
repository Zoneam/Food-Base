const express = require('express');
const router = express.Router();
const likesCtrl = require('../controllers/likes');
const isLoggedIn = require('../config/auth');

router.get('/recipe/:id/like', isLoggedIn, likesCtrl.like);

module.exports = router;