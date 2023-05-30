const express = require('express');
const router = express.Router();

const mainControllers = require('../controllers/mainController');

// CRUD Users
router.get('/getAllUser', mainControllers.getAllUser);
router.delete('/deleteOneUser', mainControllers.deleteOneUser);
router.put('/updateOneUser', mainControllers.updateOneUser);
router.post('/addOneUser', mainControllers.addOneUser);

// CRUD Mobil
router.get('/getAllMobil', mainControllers.getAllMobil);
router.delete('/deleteOneMobil', mainControllers.deleteOneMobil);
router.put('/updateOneMobil', mainControllers.updateOneMobil);
router.post('/addOneMobil', mainControllers.addOneMobil);

// CRUD Orders
router.get('/getAllOrder', mainControllers.getAllOrder);
router.delete('/deleteOneOrder', mainControllers.deleteOneOrder);
router.put('/updateOneOrder', mainControllers.updateOneOrder);
router.post('/addOneOrder', mainControllers.addOneOrder);

module.exports = router;