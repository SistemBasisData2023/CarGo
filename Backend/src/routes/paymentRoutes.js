const express = require('express');
const router = express.Router();

const paymentControllers = require('../controllers/paymentController');

router.put('/updateOneAmountPaid', paymentControllers.updateOneAmountPaid);
router.put('/updateOnePaymentStatus', paymentControllers.updateOnePaymentStatus);

module.exports = router;