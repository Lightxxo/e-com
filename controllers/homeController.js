const express = require('express');
const path = require('path');
const router = express.Router();

// Import relevant models
const Brand = require('../models/brandModel');
const Product = require('../models/productModel');

// Route for the home page
router.get('/', async (req, res) => {
  try {
    // Fetch data from models (e.g., popular brands and products)
    const popularBrands = await Brand.find({ popular: true });
    const popularProducts = await Product.find({ popular: true });

    // Render the home page view with fetched data
    res.sendFile(path.join(__dirname, '../views/home.html'));
  } catch (err) {
    // Handle errors
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;


