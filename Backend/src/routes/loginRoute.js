const express = require('express');
const router = express.Router();

const loginControllers = require('../controllers/loginController');

router.get('/login', loginControllers.login);
router.post('/register', loginControllers.register);

module.exports = router;
