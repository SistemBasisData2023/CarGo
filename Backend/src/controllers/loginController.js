const loginServices = require('../services/loginService'); 

async function login(req, res) {
    try {
        const result = await loginServices.login(req.body);
        res.status(200).json(result);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

async function register(req, res) {
    try {
        const result = await loginServices.register(req.body);
        res.status(200).json(result);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

module.exports = { login, register };