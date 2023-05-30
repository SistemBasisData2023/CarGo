const express = require('express');
const router = express.Router();

const mainControllers = require('../controllers/mainController');

router.get('/', mainControllers.getAllUsers);
router.delete('/delete', mainControllers.deleteOneUser);

module.exports = router;