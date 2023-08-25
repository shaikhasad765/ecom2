const Inventory = require('../models/inventory');

module.exports.modifyInventory = async function (req, res) {
    try {
        const payload = req.body;

        if (!Array.isArray(payload)) {
            return res.status(400).json({ message: 'Payload should be an array' });
        }

        for (const item of payload) {
            const productId = item.productId;
            const quantity = item.quantity;
            const operation = item.operation;

            console.log(`Looking for product with ID: ${productId}`);

            // Use findById to find the inventory entry by _id
            const inventoryEntry = await Inventory.findOne({ productId: productId });

            console.log('Found inventoryEntry:', inventoryEntry);

            if (!inventoryEntry) {
                console.log(`Product with ID ${productId} not found in inventory`);
                return res.status(404).json({ message: `Product with ID ${productId} not found in inventory` });
            }

            if (operation === 'add') {
                inventoryEntry.quantity += quantity;
            } else if (operation === 'subtract') {
                if (inventoryEntry.quantity < quantity) {
                    return res.status(400).json({ message: `Insufficient quantity for product ID ${productId}` });
                }
                inventoryEntry.quantity -= quantity;
            } else {
                return res.status(400).json({ message: 'Invalid operation' });
            }

            await inventoryEntry.save();
        }

        return res.status(200).json({ message: 'Inventory updated successfully' });
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};
