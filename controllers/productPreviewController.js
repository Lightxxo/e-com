const express = require('express');
const path = require('path');
const router = express.Router();

// Import relevant models
const Product = require('../models/productModel');

// Route for the product preview page
router.get('/:productId', async (req, res) => {
  const { productId } = req.params;
  try {
    // Fetch data from models (e.g., product details)
    const product = await Product.findById(productId);

    // Render the product preview page view with fetched data
    res.sendFile(path.join(__dirname, '../views/productPreview.html'));
  } catch (err) {
    // Handle errors
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
