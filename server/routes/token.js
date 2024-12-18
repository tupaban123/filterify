const express = require('express');
const router = express.Router();
const tokenController = require('../controllers/tokenController');

router.get('/refresh_token', tokenController.refreshToken);

module.exports = router;