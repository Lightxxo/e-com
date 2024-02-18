// signupController.js
const path = require('path');

// Display signup page
exports.getSignupPage = (req, res) => {
  res.sendFile(path.join(__dirname, '../views/signup.html'));
};

// Handle signup form submission
exports.signupUser = (req, res) => {
  // MongoDB integration for user signup
  res.send('MongoDB integration for user signup will be implemented later');
};

