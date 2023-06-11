const paymentServices = require('../services/paymentService');

async function updatePayment(req, res) {
    try {
        const result = await paymentServices.updatePayment(req.body);
        res.status(200).json({ message: result});
    } catch (error) {
        res.status(400).json({ message: err.message });
    }
}

module.exports = { updatePayment}; 