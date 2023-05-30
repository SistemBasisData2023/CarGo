const mainServices = require('../services/mainService'); 

async function getAllUsers(req, res) {
    try {
        const result = await mainServices.getAllUsers();
        res.status(200).json(result);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

async function deleteOneUser(req, res) {
    try {
        const result = await mainServices.deleteOneUser(req.body);
        res.status(200).json(result);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

module.exports = { getAllUsers, deleteOneUser };