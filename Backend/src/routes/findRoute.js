const express = require('express');
const router = express.Router();

const findControllers = require('../controllers/findController');

router.get('/findUserById', findControllers.findUserById);
router.get('/findUserByUsername', findControllers.findUserByUsername);
router.get('/findUserByEmail', findControllers.findUserByEmail);

router.get('/findMobilById', findControllers.findMobilById);
router.get('/findMobilByName', findControllers.findMobilByName);

router.get('/findOrderByOrderId', findControllers.findOrderByOrderId);
router.get('/findOrderByUserId', findControllers.findOrderByUserId);
router.get('/findOrderByMobilId', findControllers.findOrderByMobilId);

module.exports = router;