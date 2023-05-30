const mainServices = require('../services/mainService'); 

async function getAllUsers(req, res) {
    try {
        const result = await mainServices.getAllUsers();
        res.status(200).json(result);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}

module.exports = { getAllUsers };