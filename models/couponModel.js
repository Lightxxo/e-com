const mongoose = require('mongoose');

// Define the schema for coupons
const couponSchema = new mongoose.Schema({
  code: { type: String, required: true },
  discount: { type: Number, required: true },
  // Add more fields as needed
  expirationDate: Date // Example field
});

// Create a model for coupons using the schema
const Coupon = mongoose.model('Coupon', couponSchema);

module.exports = Coupon;
