const express = require('express');
const router = express.Router();

const findControllers = require('../controllers/findController');

router.post('/findUserById', findControllers.findUserById);
router.post('/findUserByUsername', findControllers.findUserByUsername);
router.post('/findUserByEmail', findControllers.findUserByEmail);

router.post('/findMobilById', findControllers.findMobilById);
router.post('/findMobilByName', findControllers.findMobilByName);

router.post('/findOrderByOrderId', findControllers.findOrderByOrderId);
router.post('/findOrderByUserId', findControllers.findOrderByUserId);
router.post('/findOrderByMobilId', findControllers.findOrderByMobilId);

module.exports = router;