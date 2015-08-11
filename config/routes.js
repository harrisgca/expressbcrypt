var express = require('express');
var router = express.Router();
var usersController = require('../controllers/usersController');
var authenticationController = require('../controllers/authenticationController');

router.get('/', usersController.getIndex);
router.get('/signup', usersController.newUser);
router.post('/signup', authenticationController.signup);
router.get('/login', usersController.login);
router.post('/login', authenticationController.login);

module.exports = router;
