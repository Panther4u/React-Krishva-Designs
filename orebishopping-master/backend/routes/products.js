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
// Route to get category counts
router.get('/categoryCounts', async (req, res) => {
    try {
      const categoryCounts = await Product.aggregate([
        { $group: { _id: '$category', count: { $sum: 1 } } },
      ]);
      res.json(categoryCounts);
    } catch (error) {
      console.error('Error getting category counts:', error);
      res.status(500).json({ error: 'Server error' });
    }
  });
  

module.exports = router;
