const express = require('express');
const router = express.Router();
const Category = require('../models/Category');

router.get('/blouse-count', async (req, res) => {
  try {
    const blouseCount = await Category.findOne({ name: 'blouse design' });
    res.json(blouseCount.count);
  } catch (error) {
    console.error('Error fetching blouse count:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
