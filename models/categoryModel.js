const mongoose = require('mongoose');

// Define the schema for categories
const categorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  // Add more fields as needed
});

// Create a model for categories using the schema
const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
