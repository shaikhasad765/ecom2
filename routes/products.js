const express = require('express');
const router = express.Router();

// initializing products controller
const productsController = require('../controllers/products_controller');

// to modify inventory quantities
router.post('/modify_inventory', productsController.modifyInventory);

module.exports = router;
