const express = require('express');
const router = express.Router();
const recepiesCtrl = require('../controllers/recepies');
const isLoggedIn = require('../config/auth');

router.get('/', recepiesCtrl.viewRecepies);
router.get('/search',isLoggedIn, recepiesCtrl.searchRecepies);
router.post('/save',isLoggedIn, recepiesCtrl.saveRecepie);
router.delete('/:id',isLoggedIn, recepiesCtrl.deleteRecepie)

module.exports = router;
