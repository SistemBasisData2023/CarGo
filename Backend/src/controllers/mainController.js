const mainServices = require('../services/mainService'); 

// CRUD users
async function getAllUser(req, res) {
    try {
        const result = await mainServices.getAllUser();
        res.status(200).json(result);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

async function deleteOneUser(req, res) {
    try {
        const result = await mainServices.deleteOneUser(req.body);
        res.status(200).json({ message: result});
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

async function updateOneUser(req, res) {
    try {
        const result = await mainServices.updateOneUser(req.body);
        res.status(200).json({ message: result});
    } catch (error) {
        res.status(400).json({ message: err.message });
    }
}

async function addOneUser(req, res) {
    try {
        const result = await mainServices.addOneUser(req.body);
        res.status(200).json({ message: result});
    } catch (error) {
        res.status(400).json({ message: err.message });
    }
}

// CRUD Mobil
async function getAllMobil(req, res) {
    try {
        const result = await mainServices.getAllMobil();
        res.status(200).json(result);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

async function deleteOneMobil(req, res) {
    try {
        const result = await mainServices.deleteOneMobil(req.body);
        res.status(200).json({ message: result});
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

async function updateOneMobil(req, res) {
    try {
        const result = await mainServices.updateOneMobil(req.body);
        res.status(200).json({ message: result});
    } catch (error) {
        res.status(400).json({ message: err.message });
    }
}

async function addOneMobil(req, res) {
    try {
        const result = await mainServices.addOneMobil(req.body);
        res.status(200).json({ message: result});
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

async function getAllOrder(req, res) {
    try {
        const result = await mainServices.getAllOrder();
        res.status(200).json(result);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

async function deleteOneOrder(req, res) {
    try {
        const result = await mainServices.deleteOneOrder(req.body);
        res.status(200).json({ message: result});
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

async function updateOneOrder(req, res) {
    try {
        const result = await mainServices.updateOneOrder(req.body);
        res.status(200).json({ message: result});
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

async function addOneOrder(req, res) {
    try {
        const result = await mainServices.addOneOrder(req.body);
        res.status(200).json({ message: result });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

module.exports = { getAllUser, deleteOneUser, updateOneUser, addOneUser,
                getAllMobil, deleteOneMobil, updateOneMobil, addOneMobil,
                getAllOrder, deleteOneOrder, updateOneOrder, addOneOrder};