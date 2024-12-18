const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')

router.get('/getusername', userController.getUsername);

module.exports = router;