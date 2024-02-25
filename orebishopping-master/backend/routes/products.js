const express = require('express');
const router = express.Router();

// Route to get products by category
router.get('/:category', async (req, res) => {
    try {
        const category = req.params.category;

        // Find products based on category
        const products = await Product.find({ category: category });

        res.json(products);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
