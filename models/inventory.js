const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
    productId: String, // Change this to String
    quantity: Number
}, {
    versionKey: false
});

const Inventory = mongoose.model('Inventory', inventorySchema);

module.exports = Inventory;
