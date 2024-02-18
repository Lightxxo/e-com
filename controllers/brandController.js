const express = require('express');
const path = require('path');
const router = express.Router();

// Import relevant models
const Brand = require('../models/brandModel');

// Route for the brands page
router.get('/', async (req, res) => {
  try {
    // Fetch data from models (e.g., all brands)
    const brands = await Brand.find();

    // Render the brands page view with fetched data
    res.sendFile(path.join(__dirname, '../views/brands.html'));
  } catch (err) {
    // Handle errors
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
