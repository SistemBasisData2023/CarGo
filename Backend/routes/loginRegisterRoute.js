const express = require('express');
const router = express.Router();

const { getAllUsers } = require('../controllers/loginRegisterController');

router.get('/', getAllUsers);

const usersRouter = router;
module.exports = usersRouter;
