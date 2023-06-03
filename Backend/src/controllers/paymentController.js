const paymentServices = require('../services/paymentService');

async function updateOneAmountPaid(req, res) {
    try {
        const result = await paymentServices.updateOneAmountPaid(req.body);
        res.status(200).json({ message: result});
    } catch (error) {
        res.status(400).json({ message: err.message });
    }
}

async function updateOnePaymentStatus(req, res) {
    try {
        const result = await paymentServices.updateOnePaymentStatus(req.body);
        res.status(200).json({ message: result});
    } catch (error) {
        res.status(400).json({ message: err.message });
    }
}

module.exports = { updateOneAmountPaid , updateOnePaymentStatus}; 