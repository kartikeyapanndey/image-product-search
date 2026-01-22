const express = require('express');
const Product = require('../models/Product');

const router = express.Router();

router.get('/search', async (req, res) => {
  try {
    const { tags } = req.query;
    if (!tags) return res.status(400).json({ error: 'No tags provided' });

    const tagArray = tags.split(',');
    const results = await Product.find({
      tags: { $in: tagArray }
    }).limit(20);

    res.json(results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Search failed' });
  }
});

module.exports = router;