const express = require('express');
const path = require('path');
const router = express.Router();

// Import relevant models
const Brand = require('../models/brandModel');
const Product = require('../models/productModel');
const Category = require('../models/categoryModel');

// Route for the brand item category page
router.get('/:categoryId', async (req, res) => {
  const { categoryId } = req.params;
  try {
    // Fetch data from models (e.g., category details and products)
    const category = await Category.findById(categoryId);
    const products = await Product.find({ category: categoryId });

    // Render the brand item category page view with fetched data
    res.sendFile(path.join(__dirname, '../views/brandCategory.html'));
  } catch (err) {
    // Handle errors
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
