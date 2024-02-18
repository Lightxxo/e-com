const mongoose = require('mongoose');

// Define the schema for products
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  brand: { type: mongoose.Schema.Types.ObjectId, ref: 'Brand' },
  // Add more fields as needed
  popular: { type: Boolean, default: false } // Example field
});

// Create a model for products using the schema
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
