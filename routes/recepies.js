const express = require('express');
const router = express.Router();
const recepiesCtrl = require('../controllers/recepies');
const isLoggedIn = require('../config/auth');

router.get('/', recepiesCtrl.viewRecepies);
router.get('/search', recepiesCtrl.searchRecepies);
// router.post('/',isLoggedIn, recepieCtrl.create);

module.exports = router;
