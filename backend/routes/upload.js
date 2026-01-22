const express = require('express');
const multer = require('multer');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const Product = require('../models/Product');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

router.post('/upload', upload.single('image'), async (req, res) => {
  try {
    // For demo, return fixed tags
    const tags = ['t-shirt', 'red', 'clothing'];

    // For demo, return tags; in real app, save to DB or search
    res.json({ tags });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to process image' });
  }
});

module.exports = router;