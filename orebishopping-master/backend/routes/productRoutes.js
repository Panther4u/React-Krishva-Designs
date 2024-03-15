const express = require('express');
const router = express.Router();

// Route to get product count in the "Blouse" category
router.get('/blouse-count', async (req, res) => {
    try {
        const blouseCount = await Product.countDocuments({ category: "blouse design" });
        res.json({ count: blouseCount });
    } catch (error) {
        console.error('Error fetching blouse count:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
