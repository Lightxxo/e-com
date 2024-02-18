const express = require('express');
const path = require('path');
const router = express.Router();

// Import relevant models
const Brand = require('../models/brandModel');
const Product = require('../models/productModel');

// Route for the brand store page
router.get('/:brandId', async (req, res) => {
  const { brandId } = req.params;
  try {
    // Fetch data from models (e.g., brand details and products)
    const brand = await Brand.findById(brandId);
    const products = await Product.find({ brand: brandId });

    // Render the brand store page view with fetched data
    res.sendFile(path.join(__dirname, '../views/brandStore.html'));
  } catch (err) {
    // Handle errors
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
