const mongoose = require('mongoose');

// Define the schema for brands
const brandSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  // Add more fields as needed
  popular: { type: Boolean, default: false } // Example field
});

// Create a model for brands using the schema
const Brand = mongoose.model('Brand', brandSchema);

module.exports = Brand;
